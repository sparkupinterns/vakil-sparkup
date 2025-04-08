import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opc',
  imports: [CommonModule],
  templateUrl: './opc.component.html',
  styleUrl: './opc.component.scss'
})
export class OpcComponent implements OnInit{

  
  posts = [
    { 
      title: 'Compassionate Care, Your Wellness Journey',
      image: 'https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8='
    },
    { 
      title: 'Your Health, Our Priority: Excellence in Medical Care',
      image: 'https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8='
    },
    { 
      title: 'Advanced Medical Solutions for a Healthier Tomorrow',
      image: 'https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8='
    }
  ];
  
  currentIndex = 0;
  interval: any;
  totalSlides = this.posts.length;
  
  ngOnInit() {
    this.startSlider();
  }
  
  startSlider() {
    this.interval = setInterval(() => {
      if (this.currentIndex >= this.totalSlides - 1) {
        this.currentIndex = 0; // Reset to first slide
      } else {
        this.currentIndex++; // Move to next slide
      }
    }, 3000); // Change slide every 3 seconds
  }
  
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  
  onButtonClick() {
    console.log("Button Clicked!");
  }
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.posts.length - 1; // Last slide pe jump kare
    }
  }
  
  nextSlide() {
    if (this.currentIndex < this.posts.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // First slide pe jump kare
    }
  }


}
