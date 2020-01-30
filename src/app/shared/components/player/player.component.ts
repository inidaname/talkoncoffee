import { Component, OnInit, AfterViewChecked, HostListener, ElementRef, ViewChild } from '@angular/core';
import { ShareDataService } from '../../service/share-data.service';
import { Observable } from 'rxjs';
import { Episodes } from '../../interface/episodes';
import { faCoffee, faPlay, faVolumeUp, faVolumeDown, faPause, faStop } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';


function formatTime(timeInSeconds) {
  const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

  return {
    minutes: result.substr(3, 2),
    seconds: result.substr(6, 2),
  };
}

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, AfterViewChecked {

  play: Observable<Episodes>;

  valuNumber: number;
  faPlay = faPlay;
  faCoffee = faCoffee;
  faVolumeUp = faVolumeUp;
  faVolumeDown = faVolumeDown;
  faPause = faPause;
  faStop = faStop;
  trackLength: number;
  @ViewChild('seeker') seeker: ElementRef;
  @ViewChild('seekTooltip') seekTooltip: ElementRef;
  @ViewChild('progressAmount') progressAmount: ElementRef;
  @ViewChild('timeelapse') timeelapse: ElementRef;
  @ViewChild('duration') duration: ElementRef;
  @ViewChild('player') player: HTMLAudioElement;

  constructor(
    private shareEp: ShareDataService,
    private route: ActivatedRoute
  ) {
    this.valuNumber = 0;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      console.log(param)
    })
  }

  ngAfterViewChecked() {
    this.play = this.shareEp.currentEpisode;
    this.play.subscribe(e => console.log(e))
  }

  setTimeContent(event) {
    this.duration.nativeElement.innerText = event;
  }

  setTimeElapse(event) {
    this.timeelapse.nativeElement.textContent = event;
  }

  skipAhead(event, audio) {
    const skipTo = event.target.dataset.seek;
    audio.currentTime = skipTo;
    this.progressAmount.nativeElement.style.width = (skipTo / audio.duration) * 100 + '%';
    this.seeker.nativeElement.value = skipTo;
  }

  updateSeekTooltip(event, audio) {
    const skipTo = Math.round((event.offsetX / event.target.clientWidth) * parseInt(event.target.getAttribute('max'), 10));
    this.seeker.nativeElement.setAttribute('data-seek', skipTo);
    this.progressAmount.nativeElement.setAttribute('data-seek', skipTo)
    const t = formatTime(skipTo);
    this.seekTooltip.nativeElement.textContent = `${t.minutes}:${t.seconds}`;
    const rect = audio.getBoundingClientRect();
    this.seekTooltip.nativeElement.style.left = `${event.pageX - rect.left}px`;
  }

  updateSeektip(event, audio) {
    if (event.offsetX > 0 && event.target.clientWidth > 0) {
      const skipTo = Math.round((event.offsetX / event.target.clientWidth) * parseInt(this.seeker.nativeElement.getAttribute('max'), 10));
      const t = formatTime(skipTo);
      this.seekTooltip.nativeElement.textContent = `${t.minutes}:${t.seconds}`;
    }
    const rect = audio.getBoundingClientRect();
    this.seekTooltip.nativeElement.style.left = `${event.pageX - rect.left}px`;

  }

  volume(player: HTMLAudioElement, reason: string) {
    if (reason === 'add') {
      player.volume += 0.1;
    }

    if (reason === 'down') {
      player.volume -= 0.1;
    }
  }

  checkThis(buffer: HTMLSpanElement, event) {
    buffer.style.width = event + '%';
    this.valuNumber = event;
  }

  buffered(buffer: HTMLSpanElement, event) {
    buffer.style.width = event + '%';
    this.valuNumber = event;
  }
}
