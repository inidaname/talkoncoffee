import { Directive, HostListener, Output, EventEmitter, Input } from '@angular/core';

function formatTime(timeInSeconds) {
  const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

  return {
    minutes: result.substr(3, 2),
    seconds: result.substr(6, 2),
  };
}


@Directive({
  selector: '[appTimeLine]'
})
export class TimeLineDirective {

  @Output() sendThis: EventEmitter<any> = new EventEmitter();
  @Output() lengthMax: EventEmitter<any> = new EventEmitter();
  @Output() timeElapse: EventEmitter<any> = new EventEmitter();
  @Output() duration: EventEmitter<any> = new EventEmitter();


  @HostListener('progress', ['$event.target'])
  onStart(audio: HTMLAudioElement) {
    const duration = audio.duration;
    if (duration > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (audio.buffered.start(audio.buffered.length - 1 - i) < audio.currentTime) {
          this.lengthMax.emit((audio.buffered.end(audio.buffered.length - 1 - i) / duration) * 100 + '%');
          break;
        }
      }
    }
  }

  @HostListener('loadedmetadata', ['$event.target'])
  initializeAudio(audio: HTMLAudioElement) {
    const audioDuration = Math.round(audio.duration);
    const time = formatTime(audioDuration);
    this.duration.emit(`${time.minutes}:${time.seconds}`);
  }


  @HostListener('timeupdate', ['$event.target'])
  onUpdate(audio: HTMLAudioElement) {
    const audioDuration = Math.round(audio.currentTime);
    const time = formatTime(audioDuration);
    this.timeElapse.emit(`${time.minutes}:${time.seconds}`);
    const duration = audio.duration;
    if (duration > 0) {
      this.sendThis.emit(((audio.currentTime / duration) * 100));
    }
  }
}
