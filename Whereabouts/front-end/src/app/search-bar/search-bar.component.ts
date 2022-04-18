/* Author: Tabish Rangrej 
 * Date: Feb 2, 2021
 * "Integrate Google Map Places AutoComplete In Angular" - The Code Hubs
 *  https://www.thecodehubs.com/integrate-google-map-places-autocomplete-in-angular/
 * 
 *  This uses the Google Places API and renders it dynamically in this component. 
 */

import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
declare const google: { maps: { places: { Autocomplete: new (arg0: HTMLInputElement) => any; }; }; };
// added { maps: { places: { Autocomplete: new (arg0: HTMLInputElement) => any; }; }; }; via VS Code 

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  SearchPlacesForm!: NgForm; // added ! 
  public userInput!: string; // added ! 

  constructor(@Inject(DOCUMENT) private document: Document, private renderer2: Renderer2) {

  }

  ngOnInit(): void {
    this.loadAutoComplete();
  }

  private loadAutoComplete() {
    const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDx1DNam-TwgiMqv2J5k12SNfXnVQRwgHA&libraries=places&v=weekly';
    this.loadScript(url).then(() => this.initAutocomplete());
  }

  private loadScript(url: string) {
    return new Promise((resolve, reject) => {
      const script = this.renderer2.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.text = ``;
      script.async = true;
      script.defer = true;
      script.onload = resolve;
      script.onerror = reject;
      this.renderer2.appendChild(this.document.head, script);
    })
  }

  initAutocomplete() {
    const input = document.getElementById("txtSearchPlaces") as HTMLInputElement;
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.setFields([
      "address_components",
      "geometry",
      "icon",
      "name"
    ]);

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        alert('No details available for input:' + input.value);
        return;
      } else {
        this.userInput = input.value;
        return;
      }
    });
  }

}
