import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/public_api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    photoPath: string = 'assets/images/avatar.png';
  items: MenuItem[] = [];

  
  
  
 
    ngOnInit() {
        this.items = [
            {
                label: 'Course',
              
                items: [
                    {
                        label: 'Take Charge of Your Time',
                       
                       
                    },
                    {
                        label: '  Complete Guide to Starting Up',
                      
                    },
                    
                    {
                        label: 'How To YouTube',
                    },
                    {
                        label: 'The Ultimate Guide to Effective Communication',
                    },
                    {
                        label: ' WebVeda Login',
                    }
                ]
            },
            {
                label: 'Content',
                
                items: [
                    {
                        label: 'Newsletter',
                       
                    },
                    {
                        label: 'ebook',
                      
                    },
                    {
                        label: 'Videos',
                        
                    },
                    {
                        label: 'Podcast',
                      
                    },
                    {
                        label: 'Blog',
                      
                    },
                    {
                        label: 'Quotes',
                      
                    },
                    {
                        label: 'Mobile Wallpapers',
                      
                    },
                    {
                        label: 'Book I\'ve read',
                      
                    }
                ]
            },
            {
                label: 'Books',
             
                items: [
                    {
                        label: 'DO EPIC SHIT',
                       
                    },
                    {
                        label: 'DO EPIC SHIT DONE',
                       
                    },
                ]
            },
            
            {
                label: 'epiCrew',
            },
            {
                label: 'Public Speaking',
            },
            {
                label: 'Content ',
            },
            {
                label: 'About',
            }
        ];
  }
  }

