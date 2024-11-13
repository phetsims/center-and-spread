/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiQAAAF1CAYAAADYyfG/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAbGVYSWZNTQAqAAAACAAEARIAAwAAAAEAAQAAARoABQAAAAEAAAA+ARsABQAAAAEAAABGh2kABAAAAAEAAABOAAAAAAAAAEgAAAABAAAASAAAAAEAAqACAAQAAAABAAACJKADAAQAAAABAAABdQAAAABn+XLZAAAACXBIWXMAAAsTAAALEwEAmpwYAAACMmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjU0ODwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4zNzM8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4Kiw54swAAJRdJREFUeAHt3U+oXFeeH/BS410ae5s0yElDLyWizawkEGQTkLA2s1ITM7tBPfJ6BDZZWqBNVhatbbCw9m5akI2hQVq1Fx5Lm8BAaLnp6fQMAnkahgnEyvuVc9XV7716davq1j2/c87ngqin+nfP+fxu3futc//UuZcvX75emAgQIECAAAECBQV+UHDeZk2AAAECBAgQWAoIJBYEAgQIECBAoLiAQFK8BBpAgAABAgQICCSWAQIECBAgQKC4gEBSvAQaQIAAAQIECAgklgECBAgQIECguIBAUrwEGkCAAAECBAgIJJYBAgQIECBAoLiAQFK8BBpAgAABAgQICCSWAQIECBAgQKC4gEBSvAQaQIAAAQIECAgklgECBAgQIECguIBAUrwEGkCAAAECBAgIJJYBAgQIECBAoLiAQFK8BBpAgAABAgQICCSWAQIECBAgQKC4gEBSvAQaQIAAAQIECAgklgECBAgQIECguIBAUrwEGkCAAAECBAgIJJYBAgQIECBAoLiAQFK8BBpAgAABAgQICCSWAQIECBAgQKC4gEBSvAQaQIAAAQIECAgklgECBAgQIECguIBAUrwEGkCAAAECBAgIJJYBAgQIECBAoLiAQFK8BBpAgAABAgQICCSWAQIECBAgQKC4gEBSvAQaQIAAAQIECAgklgECBAgQIECguIBAUrwEGkCAAAECBAgIJJYBAgQIECBAoLiAQFK8BBpAgAABAgQICCSWAQIECBAgQKC4gEBSvAQaQIAAAQIECAgklgECBAgQIECguIBAUrwEGkCAAAECBAgIJJYBAgQIECBAoLiAQFK8BBpAgAABAgQICCSWAQIECBAgQKC4gEBSvAQaQIAAAQIECAgklgECBAgQIECguIBAUrwEGkCAAAECBAgIJJYBAgQIECBAoLiAQFK8BBpAgAABAgQICCSWAQIECBAgQKC4gEBSvAQaQIAAAQIECAgklgECBAgQIECguIBAUrwEGkCAAAECBAgIJJYBAgQIECBAoLiAQFK8BBpAgAABAgQICCSWAQIECBAgQKC4gEBSvAQaQIAAAQIECLyFgAABAgQIjBb4/YvFuf/9zcanv/43by8WP7m48XmeQGAQEEgGCbcECBAgsFHg3P94tDj33+9tft6lK4vv/tvnG5/nCQQGAbtsBgm3BAgQIECAQDEBgaQYvRkTIECAAAECg4BAMki4JUCAAAECBIoJCCTF6M2YAAECBAgQGAQEkkHCLQECBAgQIFBMQCApRm/GBAgQIECAwCAgkAwSbgkQIECAAIFiAgJJMXozJkCAAAECBAYBgWSQcEuA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';
export default image;