import { UploadVideosModule } from './upload-videos.module';

describe('UploadVideosModule', () => {
    let uploadVideosModule: UploadVideosModule;

    beforeEach(() => {
        uploadVideosModule = new UploadVideosModule();
    });

    it('should create an instance', () => {
        expect(uploadVideosModule).toBeTruthy();
    });
});
