/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="oceania" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-3,.cls-4,.cls-5,.cls-7,.cls-8{stroke-width:0}.cls-4{fill:#353638}.cls-5{fill:#3d8e3d}.cls-7{fill:#a76541}.cls-8{fill:#fff}</style></defs><path d="M137.3 304.1c1.3 1.4 1.2 3.4.3 5.1l-.3-.2c-9.6 2.7-27.6-1.5-41-5 0-.9.1-1.9.2-2.8 6.9.9 15.9-2.2 20.7-7.2 5.6 2.7 11.3 6 16.6 8 1.3.5 2.6 1 3.5 2Z" class="cls-4"/><path d="m137.3 309.1.3.2c-.5.8-1.1 1.6-1.9 2.2-2.4 1.7-5.5 2-8.4 2.2-9 .4-18.7-3.1-27.7-4.2-1.1-.1-2.3-.3-2.9-1.1-.5-.6-.5-1.4-.5-2.1v-2.1c13.4 3.5 31.4 7.7 41 5Z" class="cls-3"/><path d="M135.2 172c1.5 3.6-2.2 7.3-5.1 9.6s-4.6 3.3-7.6 1.1c-1.4-1.1-2.6-2.6-3-4.4v-.4c-.3-3.5 5.7-10.2 6.9-10.4 3.4-1.2 7.5.9 8.9 4.5Z" class="cls-7"/><path d="M75.3 215.9c-5.8 18.7-7.6 26-9.8 31.4-.7 1.8-13.1 44.1-14.8 45.1-.5.3-1.2.5-2.1.7-2.3.5-5.8.8-9.4.8-4.4 0-8.8-.6-13.1-1.2-.5 0-1-.1-1.5-.2 11.2-29 18.9-45.3 21.4-58.9 2.1-11.8 0-33.4 2.8-46.7v-.2c16.5 4.9 28.7 7.5 46 5.8 4.5 7.8 16.4 32.5 20 44.2.8 2.5 3.5 45.9 3.9 55.8-.4.6-.9 1.2-1.4 1.7-4.8 5-13.7 8.1-20.7 7.2-.7 0-1.4-.2-2.1-.4-.2-10.5-1.7-19.2-1.4-36.1 0-6.4.6-23.4-1.4-27-3.8-7-10.7-16.2-16.2-21.9h-.1Z" class="cls-4"/><path d="M126.2 167.5c-1.2.3-7.2 7-6.9 10.4h-.2c-2.9-8.6-21.2-20.8-21-27.3h-.6v-2.4h.5c3.7-1 5.7-2.8 8.9-5.2l.6.2c4 6 11.7 19.1 18.5 24.2Z" class="cls-7"/><path d="M119.9 59c.8 1.7.6 3.5-.4 5.2-2.5 3.9-1.4 5.5-2.1 8.8l.2.7c-2.1 2.2-3.8 2.2-5.2 1.5-1.2-.6-2.1-1.8-2.7-2.7-1.2-1.7-2.6-3.9-4.7-3.9-1.9 0-3.6 1.9-5.4 1.3-2.3-.8-2.5-5.1-5-4.9-1.6.1-2.2 2.2-3.7 2.7s-3-.8-4.1-1.9-2.9-2.2-4.2-1.3-1 2.9-2.1 4.1c-.8.8-2 .9-3 .9-1.1 0-2.3 0-3.1.8-1.3 1.1.2 2.2-.2 3.3-.5 1.3-2 2.7-3.3 3s-2.4-.8-3-2c-.7-1.6-2.8-2-4.1-1.1-1.4.9-2.1 2.7-2.3 4.5-.3 3.1.9 6.5 3.4 7.8.4.2 1 .4 1.4.4.3 1.4.5 3.5.7 5.8-3.7 1-5.4-6.2-8.5-6.5-2.7-.3-3.2-4.8-2.6-7.5.3-1.5 1.1-3.4 0-4.4-.9-.8-1.3-2.2-2.3-2.7-1.9-.9-1.8-3.7-.8-5.5s1.6-1.7 1.7-3.8c.2-3.3-3.3-6.5-1.8-9.5.9-1.8 3.4-2.3 4.7-3.9 1.1-1.2 1.3-3 1.4-4.6s1.4-2.3 2.4-3.6c.9-1.3 3-2.1 4.2-1 6.7-.4 6.2-6.2 10.5-4 2.5 1.3 4.4 1.5 8 .3 1.8-.6 3.6-1.6 5.5-1.3 2.7.5 4.5 3.4 7.3 3.7 2.9.4 5.8-1.4 8.1.4 2.1 1.8 1.1 5 3.2 6.8 1.6 1.3 5.9 1.8 7.4 3.2 1.9 1.8.6 4.1 1.4 6.5.6 1.7 2.3 2.7 3 4.3Z" style="stroke-width:0;fill:#d7ad75"/><path d="m86.4 94.3-.2.2c-1.5 7.6 8.7 11.9 11.3 4.4-4.4-.5-7.3-2.1-11.1-4.7Zm-19.9-8.1c-.5 0-1-.1-1.4-.4-2.5-1.3-3.8-4.8-3.4-7.8.2-1.8.9-3.5 2.3-4.5 1.4-.9 3.5-.5 4.1 1.1.5 1.2 1.7 2.3 3 2s2.8-1.8 3.3-3c.4-1.1-1.1-2.1.2-3.3.8-.7 2-.8 3.1-.8s2.3-.1 3-.9c1.1-1.1.8-3.2 2.1-4.1s3.1.2 4.2 1.3 2.6 2.4 4.1 1.9 2.2-2.6 3.7-2.7c2.4-.2 2.6 4.1 5 4.9 1.8.6 3.5-1.2 5.4-1.3 2.1 0 3.5 2.2 4.7 3.9.6.8 1.5 2 2.7 2.7-1.3 4.3-3.3 7.7-4 10-.6 1.9-.6 9.9-8 17.9 0 0-4.3 5.1-8.2 5.7-.7.1-2-.1-3.8-.7-.5-.2-1.1-.4-1.7-.6 0 .6-.4 2-1 3.1-.3.6-.7 1.1-1 1.2-.9.4-2.9.8-3.9.8-3.1-.2-6.3-1.4-9.1-3.1q-2.55-1.65-4.5-3.6l-.2-.4c.8-1.9.6-8.2.1-13.4-.2-2.3-.5-4.4-.7-5.8Zm39.5-2.3c.3-1.4 0-2.7-.9-2.9-.8-.2-1.7.8-2.1 2.2-.3 1.4 0 2.7.9 2.8.8.2 1.7-.8 2.1-2.2Zm-15.7-3.6c.3-1.4-.1-2.6-.9-2.8s-1.8.8-2.1 2.1c-.3 1.4.1 2.6.9 2.8s1.8-.8 2.1-2.1" class="cls-7"/><path d="M94.2 115.4c-.4-1.5-.8-2.9-1.1-4.5 10.4 7.1 12.4 24.2 15.9 30.8-.7.5-1.4.9-2 1.3-3.3 2.3-5.2 4.2-8.9 5.2h-.5c.2-7.9-.1-15.8-1.4-24-.5-3.1-1.3-5.9-2.1-8.8Z" class="cls-5"/><path d="M105.2 81.1c.8.2 1.2 1.4.9 2.9-.3 1.4-1.3 2.4-2.1 2.2s-1.2-1.4-.9-2.8 1.3-2.4 2.1-2.2Z" class="cls-3"/><path d="M94.7 192.4c-17.2 1.7-29.4-.8-45.9-5.8-.3 0-.5-.2-.8-.2 1.7-5.2 1.5-5.9 2.4-11.3 1.4 1.1 3 2.3 4.6 3.5 1.3 2.2 8.3 8 10.8 6.9 2.1-.9 6.7-10.2 5.5-12.8-1.1-2.4-11.9-4.8-13.9-2.9-2.1-2.5-3.7-4.9-5.3-7.3 1.1-11 2.2-18.8 2.3-25.6h-.1c2-4.1 4-8.6 5.3-12.6.9-2.8.4-5.9-.2-8.9h.3c3-3.6 7.6-5.6 12.2-5.4v-.5c2.9 1.8 6.1 3 9.2 3.1 1 0 3-.4 3.9-.8.3-.1.7-.6 1-1.2h.3c3.1.8 5.9 2.4 8 4.7.8 2.9 1.6 5.8 2.1 8.8 1.2 8.2 1.5 16.1 1.4 24v2.4c-.4 13.7-2.2 27.3-2.7 41.8h-.2Zm-9.8-39.1 1.7-25.1-4.6-.3c-.3 1-.8 1.7-1.4 2.1s-1.5.6-2.7.7l-.3 3.7 3.1.2-1.3 18.4 5.5.4Z" style="stroke-width:0;fill:#67b96a"/><path d="M88.4 108.4q2.7.9 4.8 2.4c.3 1.6.7 3.1 1.1 4.6-2.1-2.3-5-3.9-8-4.6H86c.6-1.2 1-2.6 1-3.2.6.2 1.1.4 1.7.6v.3Zm9.1-9.4c-2.6 7.5-12.8 3.2-11.3-4.4l.2-.2c3.8 2.5 6.7 4.2 11.1 4.7Z" class="cls-8"/><path d="M89.3 77.5c.8.2 1.3 1.4.9 2.8-.3 1.4-1.3 2.3-2.1 2.1s-1.3-1.4-.9-2.8c.3-1.4 1.3-2.3 2.1-2.1" class="cls-3"/><path d="M86.7 128.1 85 153.2l-5.5-.4 1.3-18.4-3.1-.2.3-3.7c1.2 0 2.1-.3 2.7-.7s1.1-1.1 1.4-2.1l4.6.3Z" class="cls-8"/><path d="M57.2 169.8c2.1-1.9 12.8.5 13.9 2.9 1.2 2.6-3.4 11.9-5.5 12.8-2.5 1.1-9.4-4.8-10.8-6.9-1.6-1.2-3.2-2.4-4.6-3.5-8.5-6.6-13.6-11.5-19.3-21.5-1.9-3.3-.5-10.3 2.5-17.4v.3c.4 1.2 7.7 4.8 12.4 8.7-1.3 1.9-1.3 2-2.8 4.2 3.9 5.3 6.3 9.3 8.8 13.1 1.6 2.4 3.2 4.8 5.3 7.3Z" class="cls-7"/><path d="M71.9 109.5v.5c-4.7-.2-9.3 1.9-12.3 5.4h-.3v-.2c-.6-3-2.7-5.9-5.6-6.7 5.2-.8 9.9-1.7 13.5-2.3l.3-.3c1.3 1.3 2.8 2.6 4.5 3.6Z" class="cls-8"/><path d="M63.4 307.8c.4 1.7.3 3.1 0 4.3h-.5c-14.1-1-27.9-7.4-37.6-17.6h-.4c.3-.6.7-1.1 1.2-1.8 4.4.6 8.7 1.2 13.1 1.2 3.6 0 7.1-.3 9.4-.8 3.3 6.5 4.5 8.1 11.7 12.2 1.2.7 2.8 1.1 3.1 2.5" class="cls-4"/><path d="M62.8 311.9h.5c-1.1 3.7-5.4 4.5-9.8 3.5-9.2-2.1-14-5-27.8-14.6-.9-.6-2-1.3-2.2-2.3-.2-.8.1-1.6.4-2.3s.6-1.2.9-1.8h.4c9.7 10.3 23.5 16.7 37.6 17.5" class="cls-3"/><path d="M46 145.2c-4.7-3.9-12-7.5-12.4-8.7v-.3c.9-3 13.2-25.4 20-27.7 2.9.9 5 3.8 5.6 6.7v.2c.6 2.9 1.1 6 .2 8.9-1.3 3.9-3.3 8.5-5.3 12.5-2.4 4.7-4.8 8.7-6.1 10.2-.6-.6-1.3-1.3-2-1.9Z" class="cls-5"/><path d="M53.6 108.5c-6.8 2.3-19.1 24.7-20 27.7v.3c.4 1.2 7.7 4.8 12.4 8.7.7.6 1.4 1.3 2 1.9 1.4-1.5 3.8-5.6 6.1-10.2 2-4 4-8.6 5.3-12.5.9-2.8.4-5.9-.2-8.9v-.2c-.6-3-2.7-5.9-5.6-6.7Zm39.5 2.4c.3 1.5.7 3 1.1 4.5.8 2.9 1.6 5.8 2.1 8.8 1.2 8.2 1.5 16.1 1.4 24v2.4c-.4 13.7-2.2 27.3-2.7 41.8h-.2c-17.2 1.7-29.4-.8-45.9-5.8-.3 0-.5-.2-.8-.2 1.7-5.2 1.5-5.9 2.4-11.3m3.7-38.2c0 6.8-1.1 14.5-2.3 25.5" class="cls-1"/><path d="M33.6 136.1c-3 7.1-4.5 14.1-2.5 17.4 5.8 10 10.8 14.9 19.3 21.5 1.4 1.1 3 2.3 4.6 3.5M46.1 145s0 .1-.1.2c-1.3 1.9-1.3 2-2.8 4.2 3.9 5.3 6.3 9.3 8.8 13.1 1.6 2.4 3.2 4.8 5.3 7.3s.3.3.4.5m30-62.1c.2 0 .5.1.7.2q2.7.9 4.8 2.4c10.4 7.3 12.4 24.3 15.9 30.9-.7.5-1.4.9-2 1.3-3.3 2.3-5.2 4.2-8.9 5.2" class="cls-1"/><path d="M57.3 169.7c2.1-1.9 12.8.5 13.9 2.9 1.2 2.6-3.4 11.9-5.5 12.8-2.5 1.1-9.4-4.8-10.8-6.9m43.2-27.9c-.1 6.6 18.1 18.7 21 27.3m-11.4-34.6c4 6 11.7 19.1 18.5 24.2" class="cls-1"/><path d="M126.2 167.5c-1.2.3-7.2 7-6.9 10.4v.4c.4 1.8 1.6 3.4 3 4.4 3 2.2 4.7 1.3 7.6-1.1s6.6-6.1 5.1-9.6c-1.5-3.6-5.5-5.7-8.9-4.5m-72.5-59c5.2-.8 9.9-1.7 13.5-2.3m-18.4 80.6c-2.8 13.3-.7 34.9-2.8 46.7-2.5 13.6-10.2 29.9-21.4 58.9.5 0 1 .1 1.5.2 4.4.6 8.7 1.2 13.1 1.2 3.6 0 7.1-.3 9.4-.8.9-.2 1.6-.4 2.1-.7 1.7-.9 14.1-43.2 14.8-45.1 2.2-5.4 3.9-12.7 9.8-31.4 1.1-3.6 2.4-7.6 3.8-12.2" class="cls-1"/><path d="M75.4 215.9c5.5 5.7 12.4 14.9 16.2 21.9 2 3.6 1.4 20.6 1.4 27-.2 16.8 1.3 25.6 1.4 36.1.7.2 1.4.3 2.1.4 6.9.9 15.9-2.2 20.7-7.2.5-.6 1-1.1 1.4-1.7-.4-9.9-3.1-53.3-3.9-55.8-3.6-11.6-15.5-36.4-20-44.2" class="cls-2"/><path d="M86.8 107.6c0 .6-.4 2-1 3.1-.3.6-.7 1.1-1 1.2-.9.4-2.9.8-3.9.8-3.1-.2-6.3-1.4-9.1-3.1q-2.55-1.65-4.5-3.6M26.1 292.7c-.5.6-.8 1.2-1.2 1.7-.3.6-.6 1.1-.9 1.8s-.6 1.6-.4 2.3c.2 1.1 1.3 1.7 2.2 2.3 13.8 9.6 18.7 12.5 27.8 14.6 4.4 1 8.7.2 9.8-3.4.4-1.1.4-2.6 0-4.3-.3-1.4-1.9-1.8-3.1-2.5-7.1-4.1-8.4-5.7-11.7-12.2m47.9 8.3c-.1.9-.2 1.9-.2 2.8v2.1c0 .7 0 1.5.5 2.1.6.8 1.8 1 2.9 1.1 8.9 1 18.6 4.6 27.7 4.2 2.9-.1 6.1-.5 8.4-2.2.8-.6 1.4-1.3 1.9-2.2.9-1.7 1-3.7-.3-5.1-.9-1-2.2-1.5-3.5-2-5.3-2-11.1-5.3-16.6-8m-25-185.3c-.7.1-2-.1-3.8-.7-.5-.2-1.1-.4-1.7-.6-4.5-1.7-10.8-5.2-16.1-10.8m41.7-21.4c-1.3 4.2-3.3 7.6-4 9.8-.6 1.9-.6 9.9-8 17.9 0 0-4.3 5.1-8.2 5.7m16.1-30.8c-1.1-1.7-3.3-2.4-4.7-1.4m-18.3-4.3c3.6-1 7.1-.4 8.3 1.4m7.3 18.5c-.2 4-8.7 1.6-9.9.2m12.1-9c-.3 1.4 0 2.7.9 2.8.8.2 1.7-.8 2.1-2.2.3-1.4 0-2.7-.9-2.9-.8-.2-1.7.8-2.1 2.2Zm-15.9-3.6c-.3 1.4.1 2.6.9 2.8s1.8-.8 2.1-2.1c.3-1.4-.1-2.6-.9-2.8s-1.8.8-2.1 2.1M97.5 99c-4.4-.5-7.3-2.1-11.1-4.7l-.9-.6" class="cls-1"/><path d="M97.5 99c-2.6 7.5-12.8 3.2-11.3-4.4m-19.7-8.3c.3 1.4.5 3.5.7 5.8.5 5.2.7 11.5-.1 13.4m1.3-20.3c-.4.8-1.1 1.1-1.9 1-.5 0-1-.1-1.4-.4-2.5-1.3-3.8-4.8-3.4-7.8.2-1.8.9-3.5 2.3-4.5 1.4-.9 3.5-.5 4.1 1.1.5 1.2 1.7 2.3 3 2s2.8-1.8 3.3-3c.4-1.1-1.1-2.1.2-3.3.8-.7 2-.8 3.1-.8s2.3-.1 3-.9c1.1-1.1.8-3.2 2.1-4.1s3.1.2 4.2 1.3 2.6 2.4 4.1 1.9 2.2-2.6 3.7-2.7c2.4-.2 2.6 4.1 5 4.9 1.8.6 3.5-1.2 5.4-1.3 2.1 0 3.5 2.2 4.7 3.9.6.8 1.5 2 2.7 2.7 1.4.7 3.1.7 5.2-1.5" class="cls-1"/><path d="M25.2 294.4c9.7 10.3 23.5 16.7 37.6 17.5m33.3-7.8h.1c13.4 3.5 31.4 7.7 41 5" class="cls-2"/><path d="M67.5 92h-.2c-3.7 1-5.4-6.2-8.5-6.5-2.7-.3-3.2-4.8-2.6-7.5.3-1.5 1.1-3.4 0-4.4-.9-.8-1.3-2.2-2.3-2.7-1.9-.9-1.8-3.7-.8-5.5s1.6-1.7 1.7-3.8c.2-3.3-3.3-6.5-1.8-9.5.9-1.8 3.4-2.3 4.7-3.9 1.1-1.2 1.3-3 1.4-4.6s1.4-2.3 2.4-3.6c.9-1.3 3-2.1 4.2-1 6.7-.4 6.2-6.2 10.5-4 2.5 1.3 4.4 1.5 8 .3 1.8-.6 3.6-1.6 5.5-1.3 2.7.5 4.5 3.4 7.3 3.7 2.9.4 5.8-1.4 8.1.4 2.1 1.8 1.1 5 3.2 6.8 1.6 1.3 5.9 1.8 7.4 3.2 1.9 1.8.6 4.1 1.4 6.5.6 1.7 2.3 2.7 3 4.3.8 1.7.6 3.5-.4 5.2-2.5 3.9-1.4 5.5-2.1 8.8m-32.7 80.4-5.5-.4 1.3-18.4-3.1-.2.3-3.7c1.2 0 2.1-.3 2.7-.7s1.1-1.1 1.4-2.1l4.6.3-1.7 25.1ZM71.8 110c-4.6-.2-9.2 1.9-12.2 5.4m26.6-4.7c3.1.7 5.9 2.3 8 4.6l.2.2" class="cls-1"/></svg>')}`;
export default image;