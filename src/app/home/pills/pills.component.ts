import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PillsService } from './pills.service';

@Component({
  selector: 'app-pills',
  templateUrl: './pills.component.html',
  styleUrls: ['./pills.component.scss']
})
export class PillsComponent implements OnInit {

  constructor(public pills: PillsService) { }
  

  ngOnInit(): void {
  }

  addMedicine() {
    Swal.fire ({
      title: 'Añadir Medicina',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      preConfirm:(data) =>{
        this.pills.pills.push(data)
      }
      }) 
      
  }
  addReminder(){}
  /* addReminder() {
    Swal.fire({
      title: 'Login Form',
      html: '<select id="day" class="swal2-input">' +
          '<option value="lunes">Lunes</option>' +
          '<option value="marte">Marte</option>' +
          '<option value="miercoles">Miercoles</option>' +
          '<option value="jueves">Jueves</option>' +
          '<option value="viernes">Virnes</option>' +
          '<option value="sadabo">Sabado</option>' +
          '<option value="domingo">Domingo</option>' +
        '</select>' + 
      '<input id="hora"  class="swal2-input" required type="time" />',
      confirmButtonText: 'Guardar',
      focusConfirm: false,
      preConfirm: () => {
        const day = Swal.getPopup().querySelector('#day').value
        const hour = Swal.getPopup().querySelector('#hora').value
        
        if (!day || !hour) {
          Swal.showValidationMessage(`Por favor, ingrese un día y una hora validos`)
        }
        return { day: day, hour: hour }
      }
    }).then((result) => {
      Swal.fire(`
        day: ${result.value.day}
        hour: ${result.value.hour}
      `.trim())
    })
    
  } */
}
