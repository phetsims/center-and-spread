/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="asia" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-10,.cls-3,.cls-6,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-6{fill:#2b388d}.cls-7{fill:#878586}.cls-8{fill:#e0bfa4}.cls-9{fill:#332628}.cls-10{fill:#fff}</style></defs><path d="M215.6 213.8c2.8 1.2 3.3 5.2 1.9 7.9s-4.2 4.4-6.9 5.9c-8.3 4.4-17.3 7.4-26.2 10.3-1.1.4-2.3.7-3.3.2l-.2-.4c-1.6-3.3-4.9-7.5-5-11.1.1 0 .3.1.4.2.9 3.8 10.5-6.4 9.9-7.7-.3-.7-2.7-1.6-2.7-3q0-.75.3-1.2c.4-.5 1-.8 1.8-1h.5c8.2 1.6 16.8.3 25.1-.3 1.4-.1 2.9-.2 4.2.4Z" class="cls-7"/><path d="M186.4 219c.6 1.3-9 11.6-9.9 7.8-.1-.1-.3-.2-.4-.2-4.3-1.8-7.8-2.7-10.7-3.3v-.3c3.7-3.2 6.2-7.7 6.8-12.5v-.2c3.5 1.3 7.3 2.7 11.9 4.4-.2.3-.3.8-.3 1.3 0 1.4 2.4 2.3 2.7 3Z" class="cls-10"/><path d="M172.1 210.3v.2c-.7 4.8-3.2 9.3-6.8 12.5v.3c-10.1-1.9-13.6.8-22.7-7.4-10.5-2-11.7.2-19-.2-2.4-6.9 2.5-20.1 5.8-23.2 8.8 3.6 8.2 2.2 19.1 8.9 9.9 3.6 16 6.1 23.5 8.9Z" class="cls-8"/><path d="m113 291.5 20.7 11.1c1.2.6 2.4 1.3 3.2 2.4 1.5 2.3-.1 5.5-2.7 6.8s-5.7 1.2-8.6.9c-9-.9-17.7-3.2-26.4-5.5-1-.3-2.2-.6-2.7-1.5-.4-.6-.3-1.4-.2-2.1.5-3.1 1.3-6.2 2.6-9.1h.3v1.1c.9 2.2 5.1 3.7 7.3 2.6 1.3-.7 2-2 2.6-3.2s.1-2.6 1.3-3.4l.2-.2c1-.7 1.5-.8 2.4.2Z" class="cls-7"/><path d="M133.2 82.3c-1.5 3.4-3.4 5.1-8.3 6.8.4-2 3.7-5.4 2.4-7.1-4.6 3.9-14.2 5-20.2 3.9.7-1.2 2.5-2.5 3.2-3.7-3.1 1.1-7.1 2.7-10.9 3.4v.3c-2.8 13.7-1.6 15.9 2.3 24.5-1.7.3-4 .5-6.5.7-1.2 0-2.5.2-3.7.2-5.4.3-11.3.4-15.5.6h-1.9c3-3.2 5.2-9.6 4.9-13.6-1.2-15.5-.4-20.8 4.8-29.8 3.5-6.1 9.6-12.8 26.2-11.6h.2c21.8 4.9 28.9 14.2 26.2 31.1l-.2.3c-2.2 8.5-8.8 23.5-2.8 32.1-6 1.7-12.2 2.6-18.4 2.1l-.6.2c-1.7-.8-3.3-1.6-4.3-2.1h-.1v-.4c2.3.8 4.2 1.3 5.1 1.2 3.5-.6 8.5-5.5 8.5-5.5 6.8-5.8 5.8-18 6.4-19.8.6-2.2 4.3-9.1 3.3-13.7Z" class="cls-9"/><path d="M120.9 111.1c-3.9-.4-6.5-2.1-9.8-4.5l-.2.2c.3 8.9 7.8 9.7 10 4.3m12.4-28.7c.9 4.7-2.7 11.5-3.3 13.7-.5 1.9.5 14-6.4 19.8 0 0-5 4.9-8.5 5.5-.8.1-2.8-.4-5.1-1.2-3.6-1.4-8-3.6-10.3-5.7-.9-.8-3-2.4-4.5-3.4 2.6-.2 4.9-.4 6.5-.7-3.9-8.6-5.1-10.8-2.2-24.5v-.3c3.7-.8 7.7-2.3 10.8-3.4-.7 1.2-2.5 2.5-3.2 3.7 6 1.1 15.6 0 20.2-3.9 1.3 1.7-2 5.1-2.4 7.1 4.9-1.7 6.8-3.3 8.3-6.8Zm-6 16.6c.3-1.4 0-2.6-.8-2.7s-1.6.8-1.9 2.2 0 2.6.8 2.7 1.6-.8 1.9-2.2m-15.5-3.5c.3-1.3 0-2.5-.8-2.7s-1.6.8-1.9 2.1 0 2.5.8 2.7 1.6-.8 1.9-2.1" class="cls-8"/><path d="M69.8 188.8c0-1.2 0-2.5.1-3.9 1.5-9.5 14.9-6.3 31-2.8 8 1.7 10.1 3.8 14.1 4.7.3 0 .6.1.9.2 5.9 1.8 14.5 4.5 13.5 5.4-3.4 3-8.2 16.3-5.8 23.2 0 .3.2.6.3.8s-.7.3-2.2.1c-6.7-.7-26.9-4.6-36.1-6.4-2.2-.6-3.9-1.1-5-1.5-4.5-2.3-10.6-8.5-10.9-19.8Z" class="cls-7"/><path d="M115.7 154.8c-1.2 0-2.3 0-3.3.4-.3-2.8-.8-5.3-.9-10.1 0-1.6-1.1-9.8 1.2-13.9q.15-.3.6-.9c.8-1.1 2.1-2.6 2.8-3.2.8-.7 3-1.1 4.2-1 1.7 1.1 3 2.4 3.5 3.6 4.1 10.2 5.1 26.3 4.6 26.8-.1.1-.4.2-.8.2-2.1-.1-7.4-1.9-11.9-1.9" class="cls-6"/><path d="M86.9 151.8c1.7.6 3.5 1.6 4.9 2.7 1.6 1.2 2.8 2.4 2.8 3.4 8.2-1.5 11.7-.8 21-3.1 4.5 0 9.8 1.8 11.9 1.9.1 1.7 0 3-1.2 6.2-.8 2.1-2.1 2.2-3 2.8-3.7 1.4-6.7 2.3-9.6 2.7-7.6 1.2-13.4-.5-24-1.7-2.5.9-11.8 1.2-12.8-1.3-.8-2.1 2.7-12.8 5.5-14.2.9-.4 2.6-.1 4.4.6Z" class="cls-8"/><path d="M126.5 96.3c.7.2 1.1 1.4.8 2.7s-1.1 2.3-1.9 2.2-1.1-1.4-.8-2.7 1.1-2.3 1.9-2.2" class="cls-3"/><path d="M126 238.3c-.5 0-.9.2-1.4.2-8.1 1.4-12.9 1.6-21.9.7-1.1-.1-2.2-.2-3.5-.4-1.5-4.3-6.1-18.6-13.6-28.8 9.2 1.9 29.4 5.8 36.1 6.4v.2c3 10.7 3.6 13.7 4.3 21.6Z" class="cls-7"/><path d="M124.7 238.9c3 4.6-2 13-4.6 22.5-1.8 6.7-3.9 13.5-6.2 20.2-4 2.3-11.2.9-15-.9 0-7.6.5-15.5 2.4-21.2 1.1-3.2 2.3-7 2.8-10.4.5-3.5.2-6.1-1.4-9.3v-.6c9 .9 13.8.6 21.9-.7v.4Z" class="cls-8"/><path d="M120.2 126.1c-1.2-.1-3.4.3-4.2 1-.7.6-2 2.1-2.8 3.2-1.3-2.2-3.5-3.9-6-4.6.8-.6 1.5-1.2 2.1-1.9.3-1.4.3-1.3.6-3.1h.1c1 .6 2.6 1.3 4.3 2.2 1.9 1 4.1 2.1 5.8 3.3Zm.7-15c-2.2 5.4-9.6 4.6-10-4.3l.2-.2c3.4 2.4 6 4 9.8 4.5" class="cls-10"/><path d="M70.7 140c0-2.5.4-5.1.8-7.6.7-4.4 1.8-8.4 3.8-12 4.7-1.9 10-2.1 14.8-.5 0 .3-.2.5-.3.7h-.3c.5 4.1 4.4 7.1 8.3 7.7 3 .5 6.7-.7 9.3-2.7 2.5.7 4.7 2.4 6 4.6-.3.3-.4.6-.6.9-2.2 4.1-1.2 12.3-1.2 13.9 0 4.8.5 7.3.9 10.1 1-.3 2.1-.4 3.3-.4-9.3 2.3-12.8 1.6-21 3.2 0-1.1-1.2-2.4-2.8-3.6 1.4-1 2.5-2.1 3.2-3.2s1.2-2.5 1.4-4.2c.3-2.2 0-4.1-1-5.5-1-1.5-2.5-2.4-4.6-2.6-1.7-.2-3.2 0-4.5.7-1.1.6-2.4 1.7-3.7 3.3l3 4.1c1-1.1 1.8-1.9 2.4-2.2s1.2-.4 1.9-.3c.5 0 .8.3 1.1.8s.3 1 .2 1.7c-.1.8-.4 1.4-.8 2s-1.1 1.2-2.2 1.9c-.5.4-1 .7-1.5 1.1-1.9-.7-3.6-1-4.4-.6-2.8 1.3-6.3 12-5.5 14.2 1 2.5 10.3 2.2 12.8 1.3 10.5 1.2 16.4 2.9 24 1.7-.8 2.9 1.1 13.5 1.3 18.3-4-.9-6.1-2.9-14.1-4.6-16.1-3.5-29.5-6.7-31 2.8-.1 1.4-.2 2.7-.1 3.9-3.1-11.6-1.1-14.9 1-36.7 0-3.1.2-6.3 0-9.5v-2.6Z" style="stroke-width:0;fill:#4a62ba"/><path d="M115 186.7c.3 0 .6.2.9.3-.3 0-.6-.1-.9-.2Z" style="stroke-width:0;fill:#f9daf0"/><path d="M111 92.8c.8.2 1.1 1.4.8 2.7s-1.1 2.2-1.9 2.1c-.8-.2-1.1-1.4-.8-2.7s1.1-2.2 1.9-2.1" class="cls-3"/><path d="M114 281.6c-1.1 3.2-2.2 6.4-3.4 9.5v.2l-.2.2c-1.1.9-.6 2.2-1.3 3.4s-1.4 2.6-2.6 3.2c-2.2 1.2-6.4-.3-7.2-2.6v-1.1c-.1-4-.3-8.9-.3-13.9 3.9 1.9 11.1 3.2 15 .9Z" class="cls-10"/><path d="M107.2 125.7c-2.7 2-6.3 3.2-9.3 2.7-3.9-.6-7.8-3.6-8.3-7.6h.3c0-.3.2-.6.3-.8.5-1.4.8-3.2 1.1-4.9.2-1.4.3-2.7.3-3.8 1.3 0 2.5-.1 3.7-.2 1.4 1.1 3.6 2.6 4.5 3.4 2.4 2.1 6.8 4.3 10.3 5.7v.5c-.3 1.8-.4 1.6-.6 3.1-.6.7-1.3 1.4-2.1 1.9Z" class="cls-8"/><path d="M95.4 141.5c1 1.5 1.3 3.3 1 5.5-.2 1.7-.7 3.1-1.4 4.2s-1.8 2.2-3.2 3.2c-1.4-1.1-3.2-2-4.9-2.7.5-.4 1-.7 1.5-1.1 1-.7 1.8-1.3 2.2-1.9s.7-1.2.8-2c0-.7 0-1.2-.2-1.7-.3-.5-.6-.7-1.1-.8-.7 0-1.3 0-1.9.3-.7.3-1.5 1.1-2.4 2.2l-3-4.1c1.3-1.6 2.5-2.7 3.7-3.3 1.3-.7 2.8-.9 4.5-.7 2.1.3 3.7 1.2 4.6 2.6Z" class="cls-10"/><path d="M91.5 111.3c0 1.1-.1 2.4-.3 3.8-1.3-.2-2.8-.3-4.3-.3-4.5-.6-6.5-1.9-10.8-2.8 4.2-.2 10.1-.4 15.5-.6Z" class="cls-9"/><path d="M91.1 115.1c-.2 1.7-.6 3.4-1.1 4.9-4.8-1.6-10.2-1.4-14.8.5q1.5-2.7 3.6-5.1c2.3-.3 5.2-.5 7.9-.5 1.5 0 3 0 4.3.3Z" class="cls-10"/><path d="M50.8 138.3c-.3-.7-.4-1.2-.4-1.4.1-1 11.4-12.6 12.2-13.2 4-3.6 6.9-6.5 12.2-7.6.6-.1 2.1-.4 4-.6q-2.1 2.4-3.6 5.1c-2 3.6-3.1 7.6-3.8 12-.4 2.4-.7 5.1-.8 7.6-4.5 4.2-8.1 7.4-10.4 9.1-.4-.2-.8-.4-1.2-.7-3.9-2.6-7.2-7.6-8.3-10.2Z" class="cls-6"/><path d="M41.8 171.8c2.3.7 4.6 9.3 3 11.2-1.6 2-11 2.9-12.6 1.8-1.9-1.3.2-8.7 1.5-10.6 2.6-11.8 4.2-18 11.1-27.9 3.1-4.4 2.9-4.9 5.9-8 1.1 2.6 4.4 7.5 8.3 10.2-2.4 1.8-1 .6-5.9 4.5-4.5 8.3-7.9 12.1-11.3 18.9Z" class="cls-8"/><path d="m70.8 139.9-.1.1c-4.5 4.2-8.1 7.4-10.4 9.1-.4-.2-.8-.4-1.2-.7-3.9-2.6-7.2-7.6-8.3-10.2-.3-.7-.4-1.2-.4-1.4.1-1 11.4-12.6 12.2-13.2 4-3.6 6.9-6.5 12.2-7.6.6-.1 2.1-.4 4-.6 2.3-.3 5.2-.5 7.9-.5 1.5 0 3 0 4.3.3" class="cls-1"/><path d="m51 138.1-.2.2c-3 3.1-2.8 3.6-5.9 8-6.9 9.9-8.5 16.1-11.1 27.9M59 148.6c-2.4 1.7-1 .5-5.9 4.3-4.5 8.3-7.9 12.1-11.3 18.9 0 .2-.2.3-.3.5" class="cls-1"/><path d="M41.9 171.9c2.3.6 4.6 9.2 3 11.1-1.6 2-11 2.9-12.6 1.8-1.9-1.3.2-8.7 1.5-10.6m81.9-19.4c4.5 0 9.8 1.8 11.9 1.9.4 0 .7 0 .8-.2.5-.5-.5-16.6-4.6-26.8-.5-1.3-1.8-2.5-3.5-3.6-1.8-1.2-3.9-2.3-5.8-3.3-1.7-.8-3.3-1.6-4.3-2.1" class="cls-1"/><path d="M111.5 145.1c0 4.8.5 7.3.9 10.1 1-.3 2.1-.4 3.3-.4m7.6 10.9c-3.7 1.4-6.7 2.3-9.6 2.7-7.6 1.2-13.4-.5-24-1.7" class="cls-1"/><path d="M117.7 154.3c-.7.2-1.4.4-2 .5h0c-9.3 2.3-12.8 1.6-21 3.2-.2 0-.4 0-.7.1" class="cls-1"/><path d="M94.6 157.9c0-1-1.2-2.3-2.8-3.4-1.4-1.1-3.2-2-4.9-2.7-1.9-.7-3.6-1-4.4-.6-2.8 1.3-6.3 12-5.5 14.2 1 2.5 10.3 2.2 12.8 1.3m37.7-10.1v.2c.1 1.7 0 3-1.2 6.2-.8 2.1-2.1 2.2-3 2.8m-52.5-13.7c-2.1 21.8-4.1 25.1-1 36.7 0 .3.2.6.3.9m43.6-21.3s0 0 0 0c-.8 2.9 1.1 13.5 1.3 18.3h0" class="cls-1"/><path d="M79 115.2s0 .1-.1.2q-2.1 2.4-3.6 5.1c-2 3.6-3.1 7.6-3.8 12-.4 2.4-.7 5.1-.8 7.6v2.6c.3 3.1.1 6.3 0 9.5v.8m15 57.1c9.2 1.9 29.4 5.8 36.1 6.4 1.5.1 2.3.1 2.2-.1-.1-.3-.2-.5-.3-.8-2.4-6.9 2.5-20.1 5.8-23.2 1-.9-7.7-3.6-13.5-5.4-.3 0-.6-.2-.9-.3-1.3-.4-2.5-.8-3.3-1m-31.1 22.9c1.1.4 2.9 1 5 1.5" class="cls-1"/><path d="M85.7 210.1c7.5 10.2 12.1 24.5 13.6 28.8 1.2.1 2.4.3 3.5.4 9 .9 13.8.6 21.9-.7.5 0 .9-.2 1.4-.2-.6-7.8-1.3-10.8-4.3-21.6m2.9 22.1c3 4.6-2 13-4.6 22.5-1.8 6.7-3.9 13.5-6.2 20.2-1.1 3.2-2.2 6.4-3.4 9.5m-7.8-51.2c1.6 3.2 1.9 5.8 1.4 9.3-.5 3.4-1.7 7.2-2.8 10.4-1.9 5.7-2.4 13.6-2.4 21.2 0 5 .2 9.8.3 13.9v.4M69.9 184.9c-.1 1.4-.2 2.7-.1 3.9.3 11.3 6.3 17.5 10.9 19.8m48.8-16.2c8.8 3.6 8.2 2.2 19.1 8.9m-24.9 14.3c7.3.3 8.5-1.8 19 .2m0 0c9 8.2 12.6 5.5 22.6 7.4 2.9.6 6.4 1.5 10.7 3.3.1 0 .3.1.4.2m7.5-12c-4.6-1.7-8.3-3.1-11.8-4.4-7.5-2.9-13.6-5.3-23.5-8.9m27.8 25.4c.9 3.8 10.5-6.5 9.9-7.8-.3-.7-2.7-1.6-2.7-3q0-.75.3-1.2c.4-.5 1-.8 1.8-1h.3" class="cls-1"/><path d="M181.1 238c1 .5 2.2.2 3.3-.2 8.9-3 17.9-5.9 26.2-10.3 2.7-1.4 5.5-3.2 6.9-5.9s.9-6.6-1.9-7.9c-1.3-.6-2.8-.5-4.2-.4-8.3.6-16.9 2-25.1.3M176 226.5c0 3.6 3.4 7.8 5 11.1m-64.6-50.5h-.4c-.3 0-.6-.1-.9-.2-4-1-6.1-3-14.1-4.7-16.1-3.5-29.5-6.7-31 2.8" class="cls-1"/><path d="M110 120.3v.4c-.3 1.8-.4 1.6-.6 3.1-.6.7-1.3 1.4-2.1 1.9-2.7 2-6.3 3.2-9.3 2.7-3.9-.6-7.8-3.6-8.3-7.6m30.7 5.4h-.2c-1.2-.1-3.4.3-4.2 1-.7.6-2 2.1-2.8 3.2-.3.3-.4.6-.6.9-2.2 4.1-1.2 12.3-1.2 13.9" class="cls-2"/><path d="M99.3 295.6c.9 2.2 5.1 3.7 7.2 2.6 1.3-.7 2-2 2.6-3.2s.1-2.6 1.3-3.4l.2-.2c1-.7 1.5-.8 2.4.2h0" class="cls-1"/><path d="M98.9 294.6c-1.3 2.9-2.1 6-2.6 9.1-.1.7-.2 1.5.2 2.1.5.9 1.7 1.2 2.7 1.5 8.7 2.3 17.4 4.6 26.4 5.5 2.9.3 6.1.4 8.6-.9s4.2-4.5 2.7-6.8c-.7-1.1-2-1.8-3.2-2.4-6.9-3.7-13.8-7.4-20.7-11.2m-14.2-10.9h.1c3.9 1.9 11.1 3.2 15 .9 0 0 .2-.1.3-.2m57.9-70.9c-.6 4.8-3.1 9.3-6.8 12.5M86.7 114.8c-4.5-.6-6.5-1.9-10.8-2.8h-.4m58.8-32.5c-.4 1.1-.7 2-1.1 2.9-1.5 3.4-3.4 5.1-8.3 6.8.4-2 3.7-5.4 2.4-7.1-4.6 3.9-14.2 5-20.2 3.9.7-1.2 2.5-2.5 3.2-3.7-3.1 1.1-7.1 2.7-10.9 3.4-1.6.3-3.2.5-4.6.4-.8 0-1.8-.2-2.3-.8 3.1-.5 5.6-2.5 7.4-5.1" class="cls-1"/><path d="M110.2 57.2c21.8 4.8 28.9 14.1 26.2 31m-.3.2c-2.2 8.5-8.8 23.5-2.8 32.1-6 1.7-12.2 2.6-18.4 2.1m-5-65.5c-16.5-1.2-22.6 5.5-26.2 11.6-5.2 9-6 14.2-4.8 29.8.3 4.1-1.9 10.5-4.9 13.6h1.9c4.2-.2 10.1-.4 15.5-.6 1.3 0 2.5-.1 3.7-.2 2.6-.2 4.9-.4 6.5-.7-3.9-8.6-5.1-10.8-2.2-24.5" class="cls-1"/><path d="M115.1 121.4c-.8.1-2.8-.4-5.1-1.2-3.6-1.4-8-3.6-10.3-5.7-.9-.8-3-2.4-4.5-3.4m38.1-28.7c.9 4.7-2.7 11.5-3.3 13.7-.5 1.9.5 14-6.4 19.8 0 0-5 4.9-8.5 5.5" class="cls-1"/><path d="M129.7 94c-.1-2.2-4.3-3-5.2-1.8m-9.1-2.9c-1.1-1.7-4.9-3.1-7.2-1.2m12.6 13.4c2.6 3.5 1.1 5.3-.9 5.9m4.8-8.9c-.3 1.4 0 2.6.8 2.7s1.6-.8 1.9-2.2 0-2.6-.8-2.7-1.6.8-1.9 2.2m-15.6-3.6c-.3 1.3 0 2.5.8 2.7s1.6-.8 1.9-2.1 0-2.5-.8-2.7-1.6.8-1.9 2.1m11.8 16.2s0 0 0 0c-3.9-.4-6.5-2.1-9.8-4.5-.3-.2-.5-.4-.8-.6" class="cls-1"/><path d="M121 110.8c0 .1 0 .2-.1.4-2.2 5.4-9.6 4.6-10-4.3m-19.4 4.4c0 1.1-.1 2.4-.3 3.8-.2 1.7-.6 3.4-1.1 4.9 0 .3-.2.5-.3.7" class="cls-1"/><path d="M90.2 120h-.1c-4.8-1.6-10.2-1.4-14.8.5m31.9 5.2c2.5.7 4.7 2.4 6 4.6 0 .1.1.2.2.3" class="cls-2"/><path d="m86.5 152.1.3-.3c.5-.4 1-.7 1.5-1.1 1-.7 1.8-1.3 2.2-1.9s.7-1.2.8-2c0-.7 0-1.2-.2-1.7-.3-.5-.6-.7-1.1-.8-.7 0-1.3 0-1.9.3-.7.3-1.5 1.1-2.4 2.2l-3-4.1c1.3-1.6 2.5-2.7 3.7-3.3 1.3-.7 2.8-.9 4.5-.7 2.1.3 3.7 1.2 4.6 2.6 1 1.5 1.3 3.3 1 5.5-.2 1.7-.7 3.1-1.4 4.2s-1.8 2.2-3.2 3.2q0 0 0 0" class="cls-1"/></svg>')}`;
export default image;