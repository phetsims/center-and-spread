/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';
import base64SoundToByteArray from '../../tambo/js/base64SoundToByteArray.js';
import WrappedAudioBuffer from '../../tambo/js/WrappedAudioBuffer.js';
import phetAudioContext from '../../tambo/js/phetAudioContext.js';

const soundURI = 'data:audio/mpeg;base64,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RAcPOUcORXl5RgI3PwiQeUb67/0/y5vrQf/9Uf+3/f/lN97qj/+VADdv/m//oZ/9sjqgCIDNdA2qcZSAvpfGyK2QeNif010H0YNDgst+ncRFAKcs//NyRGcJOelUPgBFd5W8ErR+AVT2iD1zXWp5MUfX/0/10+RIreb/If9/9E/9v9jf/2T/9Hf/1xQ3mVazmkQixqDSCGPhAhaGJirrJyhOZQLViipl8RYWWkMbWr0AygIPiRJD/h3uXqz9g77PjTIIs3vbf/xFqzpZ+cJIper+Z///6baLVGLGrckVSgQFf+ZEuHk0/62TRX/+ooP//3MjcAC6ugZ07qk/+htEumX/3USsHXGk8aPl//NyRGgKEe1KPgCtfxWb9qcUKJuS33xrbcIjtH4QLkQS5tww/oJFDft/t/XAfoOZf/hQL/b/QTJ+pNvo5n//cYb/9Rt//UU/r/RrJpsJYHpKjWauAFtSTgQibS8qYJg0BgwNR6otRyk4oGs15wjPjrf85uaQL5UqgjgGjHygWrereYpkdAZ/VP0/R/////OX5s3/8oA//Mc3/yxISf//xg8ACH5SaIN6sNYqCQ+acdHqURZThn5u//NyZGMJoe1EPgDlixTr3nyeAVscIt1Ejcpug0urmCSmft/0fzNVId/LbzfKYI3/S/1MtX9f68zKP/5wKkef/ol1T/+kkXT7I96knW2tjYJqWJUNu8y7YFsjkRJ8q7Ls/bob/p/0AIApWaapaB7jBaIiAty+nkJbyhNyjhJE38gpLf9WpQMOX2Bt9/oY3////lb///0DN/9S/////4IUABs27SCXoK6iZaGqAm+pW3AWqFG9H6HL//NyZGQJfe1BjxVCww+TGmh+AAQ80mQraJkf/yt5jP8MreFE8yqGb+X/eon+v04Mb/9QEPeLG/1AX/SqAKoK2zIAPlzRf//X/7/5/s3sQZwHWt3/1I1uzv//87+p3///g0ABxbdg7P//+elf/O1u+7DTMr/+t210t///o/s8l/t/w7VMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NyZHsErL0eTwAjeghAAnh+AESWVVVVVVVVVVVVVVVVVVUAYDcDmRmR8yM///////8////yyWGR2Wyz//+tQQMWgf/LLKFBA5ZZbKRlLJcyOy2f//5MsBglTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NyZJQDwYzIDwAj1wYjGXAGAAceVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
const soundByteArray = base64SoundToByteArray( phetAudioContext, soundURI );
const unlock = asyncLoader.createLock( soundURI );
const wrappedAudioBuffer = new WrappedAudioBuffer();

// safe way to unlock
let unlocked = false;
const safeUnlock = () => {
  if ( !unlocked ) {
    unlock();
    unlocked = true;
  }
};

const onDecodeSuccess = decodedAudio => {
  if ( wrappedAudioBuffer.audioBufferProperty.value === null ) {
    wrappedAudioBuffer.audioBufferProperty.set( decodedAudio );
    safeUnlock();
  }
};
const onDecodeError = decodeError => {
  console.warn( 'decode of audio data failed, using stubbed sound, error: ' + decodeError );
  wrappedAudioBuffer.audioBufferProperty.set( phetAudioContext.createBuffer( 1, 1, phetAudioContext.sampleRate ) );
  safeUnlock();
};
const decodePromise = phetAudioContext.decodeAudioData( soundByteArray.buffer, onDecodeSuccess, onDecodeError );
if ( decodePromise ) {
  decodePromise
    .then( decodedAudio => {
      if ( wrappedAudioBuffer.audioBufferProperty.value === null ) {
        wrappedAudioBuffer.audioBufferProperty.set( decodedAudio );
        safeUnlock();
      }
    } )
    .catch( e => {
      console.warn( 'promise rejection caught for audio decode, error = ' + e );
      safeUnlock();
    } );
}
export default wrappedAudioBuffer;