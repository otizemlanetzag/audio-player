namespace PreRecordedAudio {

    /**
     * מנגן דגימת קול שהוקלטה במייקוד
     */
    //% block="נגן הקלטה %sample"
    //% sample.shadow="audio_recording_sample"
    export function playSample(sample: any): void {
        if (sample && sample.play) {
            sample.play();
        }
    }
}
