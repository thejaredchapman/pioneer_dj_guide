import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-setup',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent {
  activeTab = signal<'windows' | 'ubuntu'>('windows');

  selectTab(tab: 'windows' | 'ubuntu') {
    this.activeTab.set(tab);
  }
}
