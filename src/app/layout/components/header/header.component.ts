import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchOtherValidator } from '../../../signup/passwordValidation';



@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';
    modalRef: NgbModalRef;
    closeResult: string;
    userLogged: User;
    editProfile: FormGroup;
    constructor(public router: Router, private modalService: NgbModal, private userService: UserService) {
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
        this.userLogged = this.userService.getLoggedUser();
    }
   

    ngOnInit() {
        this.editProfile = new FormGroup({
            nick: new FormControl(''),
            email: new FormControl(''),
            userPassword: new FormControl('', [
                Validators.required,
                Validators.minLength(8)
            ]),
            passwordRepeat: new FormControl('', [Validators.required, matchOtherValidator('userPassword')])
        })
    }
    onSubmit(form:FormGroup){
        console.log("Ha llegado la peticion");
        this.userService.getLoggedUser();
        this.modalRef.close();
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        this.userService.deleteUserLogged();
        this.router.navigate(['/login']);
    }

    open(content) {
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }



}
