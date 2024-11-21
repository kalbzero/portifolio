import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputSwitchModule,
    ButtonModule,
    SpeedDialModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  public checked: boolean = false;
  public nameButton: string = 'Dark Mode';
  public colorButton: string = 'dark-mode-btn';

  ngOnInit(): void {
    
  }

  public toggleDarkMode(): void {
    this.checked = !this.checked;
    document.body.classList.toggle('light-theme');
    this.nameButton = this.checked ? 'Light Mode' : 'Dark Mode';
    this.colorButton = this.checked ? 'light-mode-btn' : 'dark-mode-btn';
  }

  public setLanguage(lang: string = 'pt'): void {
    console.log(lang)
  }
}
