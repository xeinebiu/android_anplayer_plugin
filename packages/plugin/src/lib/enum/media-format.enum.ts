export class MediaFormat {
    private constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly suffix: string,
        public readonly mimeType: string,
    ) {}

    public static MPEG_4 = new MediaFormat(0x0, 'MPEG-4', 'mp4', 'video/mp4');

    public static V3GPP = new MediaFormat(0x10, '3GPP', '3gp', 'video/3gpp');

    public static WEBM = new MediaFormat(0x20, 'WebM', 'webm', 'video/webm');

    public static M4A = new MediaFormat(0x100, 'm4a', 'm4a', 'audio/mp4');

    public static WEBMA = new MediaFormat(0x200, 'WebM', 'webm', 'audio/webm');

    public static MP3 = new MediaFormat(0x300, 'MP3', 'mp3', 'audio/mpeg');

    public static OPUS = new MediaFormat(0x400, 'opus', 'opus', 'audio/opus');

    public static OGG = new MediaFormat(0x500, 'ogg', 'ogg', 'audio/ogg');

    public static WEBMA_OPUS = new MediaFormat(
        0x200,
        'WebM Opus',
        'webm',
        'audio/webm',
    );

    public static VTT = new MediaFormat(0x1000, 'WebVTT', 'vtt', 'text/vtt');

    public static TTML = new MediaFormat(
        0x2000,
        'Timed Text Markup Language',
        'ttml',
        'application/ttml+xml',
    );

    public static TRANSCRIPT1 = new MediaFormat(
        0x3000,
        'TranScript v1',
        'srv1',
        'text/xml',
    );

    public static TRANSCRIPT2 = new MediaFormat(
        0x4000,
        'TranScript v2',
        'srv2',
        'text/xml',
    );

    public static TRANSCRIPT3 = new MediaFormat(
        0x5000,
        'TranScript v3',
        'srv3',
        'text/xml',
    );

    public static SRT = new MediaFormat(
        0x6000,
        'SubRip file format',
        'srt',
        'text/srt',
    );
}
