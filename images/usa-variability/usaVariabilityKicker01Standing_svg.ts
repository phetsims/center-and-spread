/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="usa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:#3a3a3a}.cls-1,.cls-2,.cls-3,.cls-4,.cls-5,.cls-7,.cls-8{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-2{fill:#3d8e3d}.cls-3{fill:#302926}.cls-4{fill:#a0715e}.cls-5{fill:#fff}.cls-7{fill:none}</style></defs><path d="M100 291.1c-2.9.2-7.6.6-9.1 1-2.4.6-3.2 1.9-4.3 3.9-2.9-21.8-14.6-42.2-15.4-55.4-1-17.6-3.6-18.6-7.7-35-2.8 13.6-7.7 23-8.8 35.8-1.3 15.6-11.1 31.9-15.1 53.3-1.8-2.8-3.4-3.1-6.8-3.9-1.9-.4-4.2-.9-6.8-.7v-.2c.7-14.5-1.6-35.7 3.8-48.7 3.4-8.2 2.5-17.9 3.8-27.4.1-.8 1.2-22.7 1.6-28.2h0c9.6 4.5 23.1 7.4 34.6 6.7 8-.5 15.1-2.7 19.4-7.3 4.3 12.5 4.9 45.9 7.6 55.8 3.4 12.9 2.5 35 3.1 50.3Z" class="cls-1"/><path d="M28.4 172.6s0 0 0 0c-2.1-2.3-6.1-7.3-9.8-11.7-3.9-5.4-10.2-15.5-7.3-20.5 0 0 3.1-4.5 6.8-9.6l.3.2c2.9 5.3 7.4 9.7 10.4 11.3-1.7 1.6-2.4 2.3-4.2 3.5h0c1 1.3 1.9 2.8 3 5 .3.6.6 1.5.9 2.4 1.1 2.3 4.9 11.9 7 12.6-3.2 1-6.1 3.6-7 6.8Zm75.5-9.4-1.2 1.2c-.8 1.1-4.5 5.7-6.5 8.5-.4-3.5-3.5-6.9-6.8-8.2 1.8-2.2 5.3-7.1 5.8-7.9 1.2-2.3 2.2-5 3.6-7.5-.6-.8-1.6-2.5-2.7-4.5 3.2-2.5 7.3-6 10.2-7.8h.3c1.8 3.3 3.4 6.5 4.2 7.6 4.4 6.8-1.8 13.2-6.9 18.6m-28.5-28.5-1.2 25.2-5.9-.3.9-18.5-3.3-.2.2-3.7c1.3 0 2.3-.3 2.9-.7s1.1-1.1 1.4-2.1l5 .2Z" class="cls-5"/><path d="M89.3 59.6c-6.8-2.5-10.4-5.7-14.6-11.8-4.7 9.3-18.5 13-26.5 12.4C47.3 65.3 47 70.7 47 75c.6 6.8.8 13.2 6.1 17.4 17.6 12.5 24.8 6.5 30.4 0 8-9.3 5-22.5 5-22.5.9-3.7.8-7 .6-10.3ZM62.5 73.2c-.9 0-1.6-1.3-1.6-2.9s.7-2.9 1.6-2.9 1.6 1.3 1.6 2.9-.7 2.9-1.6 2.9m4-8.5c-.6.2-1.2.3-1.8.2-3-.7-6 0-8.9-.2h0c.4-1.4 9.8-3 11.7-1.3h.2c0 .6-.5 1.1-1.1 1.3Zm15.6 7.9c-.7 0-1.3-1.1-1.3-2.5s.6-2.5 1.3-2.5 1.3 1.1 1.3 2.5-.6 2.5-1.3 2.5m-.3-7.9c-.6 0-1.2 0-1.8-.1s-1.2-.3-1.6-.8h0c.9-1.1 7.7-1.2 8.6.9l.3.3c.1 0 .2.2.2.3-1.9-.4-3.9-.6-5.8-.6Z" class="cls-4"/><path d="M24.5 145.8c-.5-.2-1.1-.3-1.7-.5" class="cls-7"/><path d="M45.4 123.5c-1.2 2.2-3.5 6.2-6.6 10.4-2.3 3.1-5 6.4-8 9.1h-.6c-.4 0-.9-.3-1.5-.6-3-1.6-7.5-6-10.4-11.3l-.3-.2c4.5-6.5 9.8-14 10.7-15.3 2.4-3.4 8.1-9.4 11.6-10.9 1.1-.5.6-.5 1.8-.5 1 .4 2.2.9 3.6 1.8 3.3 3.7 2.3 12.3-.3 17.5" class="cls-2"/><path d="M96.2 173c-.6.9-1 1.6-1.2 2-.7 2.1-1.1 4-1.9 6.2-1 2.8-2.2 3.4-3.8 3.8-.1-5.1-.5-12.1-.9-19.1h0c.2-.1.5-.5 1-1.1 3.3 1.3 6.4 4.8 6.8 8.2" class="cls-4"/><path d="m106.2 136.1-5.4-10.2c1 1.7 3.2 6 5.4 10.2" class="cls-2"/><path d="m99.1 149.6-.3-.3m-2.6-4.5c0-.1-.1-.2-.2-.3m7.3-.3c-1.9 1.2-3.3 3.1-4.5 5.1M28.7 173c0-.1-.2-.2-.3-.3" class="cls-7"/><path d="M44.7 176.8c.8 2-.7 3.3-1.9 3.5 1.2 1.6-1.1 2.8-2.1 2.8.1 2.6-2.6 2-5 .8-1.4-.7-2.7-1.6-3.2-2.1-2-1.9-5.2-6.3-4.1-9.1q0 0 0 0h0c.9-3.2 3.8-5.7 7-6.8.8.3 1.9.4 3 .6h0c3.5.6 7.7 1.3 6.9 5.1 1.9 1.9 3.6 4.3-.6 5.3Z" class="cls-4"/><path d="M45.3 171.5c-.8-.9-1.7-1.6-2.1-2.1m2.1 2.1s0 0 0 0M70.2 195c-2.1 1.8-4.8 5.3-5.9 6.4" class="cls-7"/><path d="M40.3 307.4c-1.4 1.3-5.2 1-7.2 1H16.8c-1.7 0-3.6-.1-4.8-1.3-1-1-1.1-6.9-.7-8.2.8-2.7 5.6-5.6 8.4-6.9 2.1-1.2 4.3-1.7 6.4-1.8 2.5-.1 4.9.3 6.8.7 3.5.8 5 1.1 6.8 3.9 1.2 1.9 2.3 11.2.6 12.8Zm75.1.7c-.4.2-3.3.8-3.8.8-5 .2-23.1-.3-24.6-1.1-2.1-1.2-1.5-9.9-.4-11.9s1.9-3.3 4.3-3.9c1.6-.4 6.3-.8 9.1-1 1.3 0 2.2-.2 2.3-.2 4 1 11.4 3.7 13.2 7.1.7 1.3 1.4 9.5 0 10.2Z" class="cls-5"/><path d="M78.4 77.6c2.3 4.9-3.5 5.4-8.6 4.5m-6.6 5.4c3.4 2.1 13 2.8 15.2.8M64.3 201.4c-.2 1.4-.5 2.8-.8 4.2" class="cls-7"/><path d="M89.7 121.3c-.3-1.1-2.1-7-2.5-8.1-2.1 7.5-5.5 20.5-19.1 19.3-8.6-.8-12.3-13.6-18-21.9-1.6-2.3-3-3.6-4.4-4.5 3.3 3.7 2.3 12.3-.3 17.5-1.2 2.2-3.5 6.2-6.6 10.4h0c3 13.3 2.4 20.9-.3 32.3v.2c3.5.6 7.6 1.3 6.8 5.1 1.9 1.9 3.6 4.3-.6 5.3.8 2-.7 3.3-1.9 3.5 1.2 1.6-1.1 2.8-2.1 2.8.1 2.6-2.6 2-5 .8l-.2.5v1.2h0c9.6 4.5 23.1 7.4 34.6 6.7 8-.5 15.1-2.7 19.4-7.3-.1-5.1-.5-12.1-.9-19.1h0c-.4-6.5-.7-13-.7-17.9s.8-5.9 1.6-9c1.2-4.8 2.4-10.1.2-17.6Zm-15.5 38.5-5.9-.3.9-18.5-3.3-.2.2-3.7c1.3 0 2.3-.3 2.9-.7s1.1-1.1 1.4-2.1l5 .2-1.2 25.2Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#67b96a"/><path d="M100 291.2v-.2m-36.5-85.5c0-.2-.1-.4-.2-.6" class="cls-7"/><path d="M93.2 53.5C91 46 85.5 38.7 78.4 34.9c-8.8-4.8-31.1-1.9-36.5 6.3-17.3 26.1-9.7 51.2-1.5 61.9.4.5 1 .8 1.7 1.1 1 .4 2.2.9 3.6 1.8 1.3.9 2.8 2.2 4.4 4.5 5.6 8.3 9.4 21.1 18 21.9 13.7 1.2 17-11.8 19.1-19.3.5-1.8.9-3.2 1.4-4.1.3-.5.5-1 .8-1.5 3.7-7.5 4-14.9 5.2-26.5.8-7.8.9-20-1.3-27.5Zm-4.5 16.4s3 13.2-5 22.5c-5.6 6.5-12.9 12.5-30.4 0-5.4-4.2-5.5-10.6-6.1-17.4 0-4.3.3-9.7 1.2-14.8 1.2-6.7 3.4-12.9 7.1-15.6 6.5-4.7 18.8-4.8 25.4-.2 7.1 4.9 10.2 8 10.2 15.8-.6-.2-1.1-.4-1.6-.5.2 3.3.2 6.7-.6 10.3Z" class="cls-1"/><path d="M67.6 63.5c0 .6-.5 1-1.1 1.2s-1.2.3-1.8.2c-3-.7-6 0-8.9-.2h0c.4-1.4 9.8-3 11.7-1.3h.2Z" class="cls-3"/><path d="M64.1 70.4c0 1.6-.7 2.9-1.6 2.9s-1.6-1.3-1.6-2.9.7-2.9 1.6-2.9 1.6 1.3 1.6 2.9" class="cls-8"/><path d="M90.9 60.2c-.6-.2-1.1-.4-1.6-.5-6.8-2.5-10.4-5.7-14.6-11.8-4.7 9.3-18.5 13-26.5 12.4 1.2-6.7 3.4-12.9 7.1-15.6 6.5-4.7 18.8-4.8 25.4-.2 7.1 4.9 10.2 8 10.2 15.8Z" class="cls-3"/><path d="M83.4 70.1c0 1.4-.6 2.5-1.3 2.5s-1.3-1.1-1.3-2.5.6-2.5 1.3-2.5 1.3 1.1 1.3 2.5" class="cls-8"/><path d="M48.3 60.2h-.4m7.9 4.5" class="cls-7"/><path d="M87.6 65.3c-1.9-.4-3.9-.6-5.8-.6-.6 0-1.2 0-1.8-.1s-1.2-.3-1.6-.8h0c.9-1.1 7.7-1.2 8.6.9l.3.3c.1 0 .2.2.2.3Z" class="cls-3"/><path d="M30.7 143.1h-.5" class="cls-7"/><path d="M106.6 136.9h-.3c-2.9 1.9-7 5.4-10.2 7.9-.8.6-1.5 1.2-2.2 1.6-1.9-3.5-3.5-5.2-4.6-7.5 1.2-4.8 2.4-10.1.2-17.6-.3-1.1-2.1-7-2.5-8.1.5-1.8.9-3.2 1.4-4.1.3-.5.5-1 .8-1.5 4.2 3.8 8.8 13.2 11.5 18.3l5.4 10.2.4.8Z" class="cls-2"/><path d="M28.4 172.6s0 0 0 0m61-7.9c-.1 0-.2-.1-.4-.2" class="cls-7"/></svg>')}`;
export default image;