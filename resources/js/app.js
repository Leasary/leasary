/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Siema from 'siema';

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.mixin({
    methods: {
        dotToObject(o) {
            let oo = {}, t, parts, part;
            for (let k in o) {
                t = oo;
                parts = k.split('.');
                let key = parts.pop();
                while (parts.length) {
                    part = parts.shift();
                    t = t[part] = t[part] || {};
                }
                t[key] = o[k]
            }
            return oo;
        }
    }
});

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('newsletter', require('./components/NewsletterComponent.vue').default);
Vue.component('app-form', require('./components/AppForm.vue').default);
Vue.component('form-rows', require('./components/FormRows.vue').default);
Vue.component('text-input', require('./components/inputs/TextInput.vue').default);
Vue.component('dropdown-input', require('./components/inputs/DropdownInput.vue').default);

Vue.component('rental-list-view', require('./components/rentals/ListView.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

    if (document.querySelector('.siema')) {

        const mySiema = new Siema({
            selector: '.siema',
            duration: 200,
            easing: 'ease-out',
            perPage: 2,
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: true
        });
        // document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
        // document.querySelector('.next').addEventListener('click', () => mySiema.next());
    }

    let tabsWithContent = (function () {
        let tabs = document.querySelectorAll('.tabs li');
        let tabsContent = document.querySelectorAll('.tab-content');

        let deactvateAllTabs = function () {
            tabs.forEach(function (tab) {
                tab.classList.remove('is-active');
            });
        };

        let hideTabsContent = function () {
            tabsContent.forEach(function (tabContent) {
                tabContent.classList.remove('is-active');
            });
        };

        let activateTabsContent = function (tab) {
            tabsContent[getIndex(tab)].classList.add('is-active');
        };

        let getIndex = function (el) {
            return [...el.parentElement.children].indexOf(el);
        };


        if (tabs.length > 0) {

            tabs.forEach(function (tab) {
                tab.addEventListener('click', function () {
                    deactvateAllTabs();
                    hideTabsContent();
                    tab.classList.add('is-active');
                    activateTabsContent(tab);
                });
            });

            tabs[0].click();
        }

    })();

    (function () {
        let modalTriggers = document.querySelectorAll('[data-modal]');
        modalTriggers.forEach(function (el) {
            let modal = document.getElementById(el.dataset.modal);
            el.addEventListener('click', () => modal.classList.add('is-active'));

            modal.querySelector('.modal-background').addEventListener('click', () => modal.classList.remove('is-active'));
            modal.querySelector('.modal-close').addEventListener('click', () => modal.classList.remove('is-active'));
        });
    })();
    //
    // (function() {
    //     let coords = [40.4419646,-80.0130456];
    //     let found = false;
    //     if (localStorage.getItem('coords')) {
    //         found = true;
    //         coords = JSON.parse(localStorage.getItem('coords'));
    //     }
    //
    //     var map = L.map('mapid').setView(coords, 13);
    //
    //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //         attribution: '&copy; & ❤ to <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     }).addTo(map);
    //
    //     if (found === false && 'geolocation' in navigator) {
    //         navigator.geolocation.getCurrentPosition(function(position) {
    //             localStorage.setItem('coords', JSON.stringify([position.coords.latitude, position.coords.longitude]));
    //             map.flyTo([position.coords.latitude, position.coords.longitude], 10);
    //         }, function(err) {
    //             console.log(err);
    //         });
    //     } else {
    //         console.log("Cannot get geolocation from user");
    //     }
    //
    //     let pins = document.querySelectorAll('.generate-pin');
    //
    //     pins.forEach(function(el) {
    //         L.marker([el.dataset.coordsLatitude, el.dataset.coordsLongitude]).addTo(map)
    //             .bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
    //     })
    //
    //     // L.marker([40.4419646,-80.0130456]).addTo(map)
    //     //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //     //     .openPopup();
    // })();


});
