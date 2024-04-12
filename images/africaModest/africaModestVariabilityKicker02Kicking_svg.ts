/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="africaModest" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-10,.cls-3,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-5{fill:#2b388d}.cls-6{fill:#1b2f60}.cls-7{fill:#19a7d4}.cls-8{fill:#0690b6}.cls-9{fill:#805530}.cls-10{fill:#fff}</style></defs><path d="M211.7 206c2.9 1.3 3.4 5.4 1.8 8.2-1.6 2.9-4.6 4.8-7.6 6.3-9.1 4.8-18.8 8.2-28.5 11.5-1.2.4-2.5.8-3.5.3-.8-.4-2-1.7-2.4-2.5 6.9-6 9.2-16.8 10.2-21.5 8.9-.8 16.5-1.8 25.4-2.6 1.5-.1 3.2-.3 4.6.3" class="cls-6"/><path d="M59.6 181.6c0-1.3 0-2.6.1-4 1.5-9.7 15.3-6.5 31.8-2.9 8.2 1.8 10.4 3.9 14.5 4.8h.1c15.7 5.3 76.2 26 75.8 27.5 0 .3-.2.7-.3 1.2-1 4.7-3.3 15.5-10.2 21.5-.8.7-1.6 1.3-2.5 1.8s-26.2-10.7-55.4-19.5c-12.4-3.7-25.5-7-37.8-8.7-2.2-.6-4-1.1-5.1-1.6-4.7-2.4-10.9-8.8-11.2-20.4Z" class="cls-8"/><path d="M130.1 298.1c16.1 7.5.9 15.4-6.7 14.5-10.6-1.2-23.1-2.5-34.5-4.7-1.3-.2-2.5-1-3-2.2-.4-.9-.2-1.8 0-2.8.8-4 .6-5.5 1.3-7.3 10.3.5 16.2-3.3 25.6-5 7.7 4.3 7.8 2.9 17.4 7.4Z" class="cls-6"/><path d="M127.5 79.7c-.2-5.9-1.7-9.7-5-12.1-6.3-4.5-11.9-4.2-18.6-1.8-7.3 2.6-13.6 13.5-14.1 21.2s-1.1 11.2 1.6 18.3c3.4 2.3 6.4 4.1 8.8 5.4l-.2.3c-7.5-.7-12.7-3.4-16.3-6.9-5.7-5.6-7.5-13.1-8.5-17.6-.2-.8-.3-1.5-.5-2.1-2.5-11.3-1.7-21.4 8.4-30 5.1-4.3 18.4-5.5 25.2-4.2 4.8.9 16.7 6.5 19.5 15.2 3.3 10.2 2.4 18.9-4 30.5 0 .1-1.1 1.4-1.5 1.9 2.3-6.1 2.7-11.5 3.1-12.9.7-2.5.8-.7 2.1-5.2" class="cls-7"/><path d="M122.4 97.8c-1.2 3.1-2.9 6.4-5.5 9.4 0 0-3.3 4.6-7 6.1-1.7.7-4.5 0-8.9-2.2-.3-.1-.6-.3-.8-.5-2.5-1.3-5.4-3.1-8.8-5.4-2.7-7.1-2.1-10.6-1.6-18.3s6.9-18.5 14.1-21.2c6.7-2.4 12.3-2.7 18.6 1.8 3.3 2.4 4.9 6.1 5 12.1-1.3 4.5-1.4 2.7-2.1 5.2-.4 1.4-.7 6.8-3.1 12.9Zm-18.3-1.1-.2.3c0 12.5 8.7 12.9 11.3 4.8-4.4-.5-7.3-2.3-11.1-5Zm21-14c0-.3-.2-.6-.4-.8-1-1.1-1.6-2.3-2.9-3-.9-.5-1.9-.9-2.9-.8s-1.9 1.1-1.6 2.1c.3.7 1 1 1.8 1.3 1.5.5 3 1.1 4.6 1.6.3 0 .6.2.8.2.3 0 .6-.2.6-.5Zm-3.3 5.8c.3-1.5 0-2.9-.9-3.1-.8-.2-1.7.9-2.1 2.4-.3 1.5 0 2.9.9 3.1.8.2 1.8-.9 2.1-2.4m-13.7-10.8c1.4.4 3.9-.7 1.5-2.6-1.5-1.3-5.5-.8-7.3-.7-.5 0-1 0-1.5.3-.5.2-.8.7-.7 1.2 0 .6 1.7.5 3.3.7 2.4.3 3.7.9 4.7 1.2Zm-2.2 6.9c.3-1.5-.1-2.8-1-3s-1.8.8-2.1 2.3.1 2.8 1 3c.8.2 1.8-.9 2.1-2.3" class="cls-9"/><path d="M124.7 81.9c.2.2.4.5.4.8s-.3.5-.6.5-.6 0-.8-.2c-1.5-.5-3-1.1-4.6-1.6-.7-.3-1.5-.6-1.8-1.3-.3-1 .6-2 1.6-2.1s2 .4 2.9.8c1.4.7 1.9 1.9 2.9 3Zm-3.8 3.5c.8.2 1.2 1.6.9 3.1s-1.3 2.6-2.1 2.4-1.2-1.6-.9-3.1 1.3-2.6 2.1-2.4" class="cls-3"/><path d="M106.4 144.1c-.4 0-.8.1-1.2.2-.7.1-1.4.3-2 .5-.3-2.9-.7-3-.8-7.9-.2-2.6-.1-5.5.1-8.1.3-2.6 1.2-5.2 2.9-7.1s5.6-3 8.1-2.5c.6.6 1.1 1.3 1.4 1.9 4.2 10.5 5.2 21.1 4.8 21.6-.2.2-.5.3-1.1.4-2.3.4-7.7.3-12.2 1" class="cls-5"/><path d="M85.9 159.7c-1.6-.2-3.2-.4-5-.6 0-1.7 0-3.5.6-5.2.5-1.6 1.6-3.1 3.1-3.7 8.2-1.7 11.9-1.1 20.4-3.1.6-.1 1.1-.3 1.7-.4-.1-.8-.2-1.8-.4-2.6 4.5-.6 9.9-.6 12.2-1 .3 3.4.6 8.7-1.1 12-1 2.1-2.2 2.2-3.1 2.9-3.8 1.5-6.9 2.3-9.8 2.8-6.3 1-11.4 0-18.8-1Z" class="cls-10"/><path d="M113.7 212.2c2.8 10.2 3.9 11.3 3.7 18.4 0 .6-4.7 59.5-4.7 60.1-9.4 1.6-15.3 5.4-25.6 5-.9 0-1.9-.1-2.9-.2-.1-.4 5.5-63.2 5.3-63.7-1.9-5.5-6.4-18.6-13.5-28.2 12.2 1.7 25.3 5 37.8 8.7Z" class="cls-8"/><path d="M113.5 119.2c-2.5-.5-6.4.6-8.1 2.5-.3-1.8-3.3-4.4-4.4-4.7-.3-2.8-.4-2.8 0-5.1 2.8 1.5 9.5 4.2 12.6 7.3Zm1.7-17.5c-2.6 8.1-11.4 7.7-11.3-4.8l.2-.3c3.8 2.7 6.7 4.6 11.1 5Z" class="cls-10"/><path d="M109.7 75c2.3 2 0 3-1.5 2.6-1-.3-2.3-.9-4.7-1.2-1.6-.2-3.2-.1-3.3-.7 0-.5.3-1 .7-1.2q.75-.3 1.5-.3c1.8 0 5.8-.5 7.3.7Z" class="cls-3"/><path d="M106 179.5h.1z" class="cls-5"/><path d="M105 81.6c.8.2 1.3 1.5 1 3s-1.3 2.5-2.1 2.3c-.9-.2-1.3-1.5-1-3s1.3-2.5 2.1-2.3" class="cls-3"/><path d="M106 179.5c-4.1-1-6.3-3-14.5-4.8-16.5-3.6-30.3-6.9-31.8 2.9-.1 1.4-.2 2.7-.1 4-2.7-10.6-.6-22 1.4-39.8.2-2 0-6.5-.4-10.3-.2-1.8-.3-3.5-.4-4.5-.2-2.4 0-5.5.5-8.6.6-2.6 5.8-6.9 10.3-7.3 4.6-.4 7 0 10 .9-.3.6-.5 1.2-.7 1.7.5 5.6 3.9 8.1 7.9 9s9.9-1.5 12.6-5.7c1.1.3 4.1 2.9 4.4 4.7-1.7 1.9-2.6 4.5-2.9 7.1s-.4 5.5-.1 8.1c0 4.9.5 5.1.8 7.9.6-.2 1.3-.3 2-.5 0 1.2-.1 1.7-.2 2.9-8.6 1.9-12.2 1.3-20.4 3.1.1 0 .3-.1.4-.2 0-.8-.6-1.7-1.6-2.6.5-.6 1-1.2 1.3-1.7.7-1.2 1-2.6 1-4.2s-.7-3.9-2.1-5.2-3.4-1.9-6-1.9-3.8.4-5.3 1.3c-1.3.8-2.5 2-3.8 3.7l4.2 3.5c-.1.1-.2.2-.3.2-2.9 1.4-6.5 12.4-5.6 14.5.2.6.9 1 1.8 1.4-.1 1-.2 2-.2 3.1h17.4v-2.4c7.4 1 12.5 2 18.8 1-.8 3 1.2 14 1.3 18.8Z" style="stroke-width:0;fill:#4a62ba"/><path d="M81.1 112c.7-1.8 1.6-3.9 2.1-5.8.2-.8.4-1.5.5-2.1 3.6 3.5 8.8 6.2 16.3 6.9l.2-.3c.3.2.6.3.8.5v.8c-.3 2.3-.2 2.2 0 5.1-2.7 4.2-8.6 6.6-12.6 5.7s-7.4-3.4-7.9-9c.2-.5.4-1.1.7-1.7Zm-.2 47.1c1.8.2 3.4.4 5 .6v2.4H68.5c0-1.1.1-2.1.2-3.1 3.2 1.1 9.3.7 11.3 0h.8Zm2.8-22.8c1.4 1.3 2.1 3 2.1 5.2s-.3 3.1-1 4.2c-.3.6-.8 1.1-1.3 1.7-1.2-1.1-3-2.2-4.7-3.1l.3-.3c.4-.6.6-1.3.6-2s-.2-1.2-.6-1.6-.9-.6-1.4-.6c-.9 0-1.6.2-2.2.6-.7.4-1.6 1.2-2.5 2.5l-4.2-3.5c1.3-1.7 2.5-2.9 3.8-3.7 1.5-.9 3.2-1.3 5.3-1.3s4.6.6 6 1.9Z" class="cls-10"/><path d="M84.6 150.2c-1.5.7-2.6 2.2-3.1 3.7-.5 1.7-.6 3.4-.6 5.2h-.8c-2 .7-8.2 1.1-11.3 0-.9-.3-1.6-.8-1.8-1.4-.9-2.2 2.7-13.2 5.6-14.5.1 0 .2 0 .3-.1 1.3-.3 3.6.3 5.8 1.4 1.8.8 3.5 2 4.7 3.1 1 .9 1.6 1.7 1.6 2.5-.1.1-.3.2-.4.2Z" class="cls-9"/><path d="M83.7 104c0 .6-.2 1.3-.5 2.1-5-.8-14.1.1-17.4.6.9-4.2.7-3 3.8-10.7 1-2.6 2.6-6.7 5.4-9.6h.3c.9 4.5 2.7 12 8.5 17.6Z" class="cls-7"/><path d="M83.1 106.1c-.5 1.9-1.4 4-2.1 5.8-3-.9-5.4-1.2-10-.9-4.5.3-9.8 4.7-10.3 7.3.8-4.9 2.4-9.7 5-11.6 3.3-.5 12.4-1.4 17.4-.6" class="cls-10"/><path d="M79 140.4c.4.4.6.9.6 1.6s-.2 1.4-.6 2c0 .1-.2.2-.3.3-2.3-1.1-4.6-1.7-5.8-1.4 1-1.3 1.8-2.1 2.5-2.6.6-.4 1.4-.6 2.2-.6s1 .2 1.4.6Zm-23.7-4.6s-.1 0-.2.1c-.1 0-.2.2-.4.3-.1 0-.2.2-.3.2-4.8-2.6-7.1-11.4-7.5-14.8v-1.2c.1-1 4.6-5.1 5.4-5.8 4.1-3.7 7.1-6.7 12.5-7.8s.6-.1 1-.2c-2.5 1.9-4.2 6.8-5 11.6-.5 3.1-.7 6.2-.5 8.6.1 1 .3 2.7.4 4.5-3.9 3.7-3.9 3.5-5.3 4.4Z" class="cls-5"/><path d="M54.4 136.5c-3.4 2.3-8 5.2-11.9 8.3-4.8 8.7-8 12.2-11.5 19.5-4.5-2-7.8 1.7-8 2.1h-.3c2.6-12 4.3-18.3 11.3-28.4 3.2-4.6 9.6-13 12.9-16.3.4 3.4 2.7 12.3 7.5 14.8" class="cls-10"/><path d="M31 164.3c2.4.6 4.7 9.4 3.1 11.4-1.7 2.1-11.3 2.9-12.9 1.8-1.9-1.3.2-9 1.5-10.9v-.3h.3c.2-.3 3.5-4 8-2" class="cls-9"/><path d="M65.8 106.7c3.3-.5 12.4-1.4 17.4-.6" class="cls-1"/><path d="M46.9 121.7v-1.2c.1-1 4.6-5.1 5.4-5.8 4.1-3.7 7.1-6.7 12.5-7.8s.6-.1 1-.2" class="cls-2"/><path d="M54.4 136.5c-4.8-2.6-7.1-11.4-7.5-14.8m8.2 14.3c-.1 0-.2.2-.4.3m5.9-4.8c-3.9 3.6-3.9 3.5-5.3 4.4m-8.4-14.2C43.7 125 37.3 133.4 34 138c-7.1 10.1-8.7 16.4-11.3 28.3v.3" class="cls-1"/><path d="M56.8 134.7c-.4.4-.9.7-1.5 1.1 0 0-.1 0-.2.1-.1 0-.3.2-.4.3-.1 0-.2.2-.3.2-3.4 2.3-8 5.2-11.9 8.3-4.8 8.7-8 12.2-11.5 19.5m0 .1c2.4.6 4.7 9.5 3.1 11.4-1.7 2.1-11.3 2.9-12.9 1.8-1.9-1.3.2-9 1.5-10.9m79.7-29.8c0 4.9.5 5.1.8 7.9.6-.2 1.3-.3 2-.5.4 0 .8-.1 1.2-.2 4.5-.6 9.9-.6 12.2-1 .5-.1.9-.2 1.1-.4.5-.5-.6-11.2-4.8-21.6-.3-.7-.7-1.3-1.4-1.9-3.1-3.1-9.8-5.8-12.6-7.3q0 0 0 0m13.6 46.1c-3.8 1.5-6.9 2.3-9.8 2.8-6.3 1-11.4 0-18.8-1-1.6-.2-3.2-.4-5-.6h-.8m4.5-8.9h-.2" class="cls-1"/><path d="M105 147.1c-8.6 1.9-12.2 1.3-20.4 3.1" class="cls-2"/><path d="M108.7 146.2c-.7.2-1.3.3-1.9.5-.6.1-1.2.3-1.7.4" class="cls-1"/><path d="M85 150c0-.7-.6-1.6-1.6-2.5-1.2-1.1-3-2.2-4.7-3.1-2.3-1.1-4.6-1.7-5.8-1.4-.1 0-.2 0-.3.1-2.9 1.4-6.5 12.4-5.6 14.5.2.6.9 1 1.8 1.4 3.2 1.1 9.3.7 11.3 0" class="cls-2"/><path d="M118.6 143.1c.3 3.4.6 8.7-1.1 11.9-1 2.1-2.2 2.2-3.1 2.9M83.7 104c0 .6-.2 1.3-.5 2.1-.5 1.9-1.4 4-2.1 5.8-.3.6-.5 1.2-.7 1.7m-20.1 13.3c.1 1 .3 2.7.4 4.5.3 3.7.6 8.3.4 10.3-2.1 17.9-4.1 29.3-1.4 39.8 0 .3.2.7.3 1m44.7-21.8s0 0 0 0c-.8 3 1.2 14 1.3 18.8h0m-30.1 24c12.2 1.7 25.3 5 37.8 8.7 29.2 8.7 54.5 20 55.4 19.5s1.7-1.1 2.5-1.8c6.9-6 9.2-16.8 10.2-21.5q.15-.75.3-1.2c.4-1.6-60.2-22.2-75.8-27.5h-.1c-1.7-.6-2.9-1-3.3-1.1m-32.1 23.3c1.1.5 2.9 1 5.1 1.6" class="cls-1"/><path d="M75.9 203.5c7.1 9.6 11.6 22.7 13.5 28.2.2.5-5.4 63.3-5.3 63.7 1 .1 2 .2 2.9.2 10.3.5 16.2-3.3 25.6-5 0-.6 4.7-59.5 4.7-60.1.2-7.1-.9-8.2-3.7-18.4" class="cls-1"/><path d="M87 295.6c-.7 1.8-.5 3.3-1.3 7.3-.2.9-.3 1.9 0 2.8.5 1.2 1.8 2 3 2.2 11.5 2.2 24 3.4 34.5 4.7 7.6.9 22.8-7 6.7-14.5-9.7-4.5-9.7-3.2-17.4-7.4M59.7 177.6c-.1 1.4-.2 2.7-.1 4 .3 11.6 6.5 18 11.2 20.4m103.1 30.4c1 .5 2.4.1 3.5-.3 9.7-3.3 19.4-6.7 28.5-11.5 3-1.6 6-3.5 7.6-6.3 1.6-2.9 1.1-7-1.8-8.2-1.4-.6-3-.5-4.6-.3-8.9.8-16.5 1.8-25.4 2.6h0m-10.2 21.4c.4.8 1.6 2.1 2.4 2.5" class="cls-1"/><path d="M107.3 179.8c-.4 0-.8-.2-1.2-.2h-.1c-4.1-1-6.3-3.1-14.5-4.8-16.5-3.6-30.3-6.9-31.8 2.9" class="cls-1"/><path d="M101.1 111.1v.8c-.3 2.3-.2 2.2 0 5.1-2.7 4.2-8.6 6.6-12.6 5.7s-7.4-3.4-7.9-9m25.8 30.2v.2c.1.8.2 1.8.4 2.6v.3" class="cls-2"/><path d="M105.2 144.3c0 1.2-.1 1.7-.2 2.9h0" class="cls-1"/><path d="M65.8 106.7c-2.5 1.9-4.2 6.8-5 11.6-.5 3.1-.7 6.2-.5 8.6m42.1 9.9c-.2-2.6-.1-5.5.1-8.1.3-2.6 1.2-5.2 2.9-7.1s5.6-3 8.1-2.5" class="cls-2"/><path d="M81.4 112.1c-.1 0-.2 0-.4-.1-3-.9-5.4-1.2-10-.9-4.5.3-9.8 4.7-10.3 7.3m40-1.5h.3c1.1.3 4.1 2.9 4.4 4.7m-19.5 37.9v2.6H68.5c0-1.1.1-2.1.2-3.1m9.8-14.4s.1-.2.2-.2l.3-.3c.4-.6.6-1.3.6-2s-.2-1.2-.6-1.6-.9-.6-1.4-.6c-.9 0-1.6.2-2.2.6-.7.4-1.6 1.2-2.5 2.5l-4.2-3.5c1.3-1.7 2.5-2.9 3.8-3.7 1.5-.9 3.2-1.3 5.3-1.3s4.6.6 6 1.9 2.1 3 2.1 5.2-.3 3.1-1 4.2c-.3.6-.8 1.1-1.3 1.7l-.2.2" class="cls-2"/><path d="M127.6 79.6s0 0 0 0c-1.3 4.5-1.4 2.7-2.1 5.2-.4 1.4-.7 6.8-3.1 12.9-1.2 3.1-2.9 6.4-5.5 9.4 0 0-3.3 4.6-7 6.1-1.7.7-4.5 0-8.9-2.2-.3-.1-.6-.3-.8-.5-2.5-1.3-5.4-3.1-8.8-5.4" class="cls-1"/><path d="M116.8 96.9c-1.9 2.5-5.6.5-7.6 0m9.6-9c-.3 1.5 0 2.9.9 3.1.8.2 1.8-.9 2.1-2.4s0-2.9-.9-3.1c-.8-.2-1.7.9-2.1 2.4M102.9 84c-.3 1.5.1 2.8 1 3 .8.2 1.8-.9 2.1-2.3.3-1.5-.1-2.8-1-3s-1.8.8-2.1 2.3m12.3 17.7c-4.4-.5-7.3-2.3-11.1-5l-.9-.6" class="cls-1"/><path d="M115.2 101.7c-2.6 8.1-11.4 7.7-11.3-4.8m4.2-19.2c-1-.3-2.3-.9-4.7-1.2-1.6-.2-3.2-.1-3.3-.7 0-.5.3-1 .7-1.2q.75-.3 1.5-.3c1.8 0 5.8-.5 7.3.7 2.3 2 0 3-1.5 2.6Zm13.7 1.2c-.9-.5-1.9-.9-2.9-.8s-1.9 1.1-1.6 2.1c.3.7 1 1 1.8 1.3 1.5.5 3 1.1 4.6 1.6.3 0 .6.2.8.2.3 0 .6-.2.6-.5s-.2-.6-.4-.8c-1-1.1-1.6-2.3-2.9-3Z" class="cls-1"/><path d="M127.6 80.7v-1c-.2-5.9-1.7-9.7-5-12.1-6.3-4.5-11.9-4.2-18.6-1.8-7.3 2.6-13.6 13.5-14.1 21.2s-1.1 11.2 1.6 18.3" class="cls-1"/><path d="M122.1 98.1s.1-.1.2-.3c.5-.6 1.5-1.8 1.5-1.9 6.4-11.5 7.3-20.3 4-30.5-2.8-8.8-14.7-14.3-19.5-15.2-6.8-1.3-20.1-.2-25.2 4.2-10.1 8.6-11 18.8-8.4 30 .1.6.3 1.3.5 2.1.9 4.5 2.7 12.1 8.5 17.6 3.6 3.5 8.8 6.2 16.3 6.9M74.9 86.5c-2.8 2.9-4.3 7-5.4 9.6-3.1 7.7-2.9 6.5-3.8 10.7" class="cls-1"/><path d="M31.1 164.3c-4.5-2-7.8 1.7-8 2.1" class="cls-2"/><path d="M85 150c-.1 0-.3.1-.4.2-1.5.7-2.6 2.2-3.1 3.7-.5 1.7-.6 3.4-.6 5.2v.2" class="cls-1"/></svg>')}`;
export default image;