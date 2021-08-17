export const TextTags = [
    {
        tag: "h1",
        shortName: "H1",
        iconName: ""
    },
    {
        tag: "h2",
        shortName: "H2",
        iconName: ""
    },
    {
        tag: "h3",
        shortName: "H3",
        iconName: ""
    },
    {
        tag: "p",
        shortName: "",
        iconName: "bi-paragraph"
    },
    {
        tag: "h4",
        shortName: "H4",
        iconName: ""
    },
    {
        tag: "h5",
        shortName: "H5",
        iconName: ""
    },
    {
        tag: "h6",
        shortName: "H6",
        iconName: ""
    },
    {
        tag: "code",
        shortName: "",
        iconName: "bi-code"
    }
];

export const BootstrapColors = [
    {
        name: 'primary',
    },
    {
        name: 'secondary',
    },
    {
        name: 'success',
    },
    {
        name: 'danger',
    },
    {
        name: 'warning',
    }
    ,
    {
        name: 'info',
    },
    {
        name: 'light',
    },
    {
        name: 'dark',
    }
]

export const SocialLinks = [
    { name: 'instagram' },
    { name: 'facebook' },
    { name: 'twitter' },
    { name: 'whatsapp' },
    { name: 'github' },
    { name: 'linkedin' },
    { name: 'youtube' },
    { name: 'google' },
    { name: 'telegram' },
    { name: 'slack' },
    { name: 'discord' },
    { name: 'twitch' }
]

export const WhiteSpace = [
    { name: 'normal' },
    { name: 'pre-wrap' }
]

export const AspectRatios = [
    {
        ratio: "1:1",
        value: "1by1"
    },
    {
        ratio: "4:3",
        value: "4by3"
    },
    {
        ratio: "16:9",
        value: "16by9"
    },
    {
        ratio: "21:9",
        value: "21by9"
    },
]

export function aspectValueToRatio(value) {
    let ratio;
    for (let i in AspectRatios) {
        if (AspectRatios[i].value == value) {
            ratio = AspectRatios[i].ratio;
            break;
        }
    }
    return ratio;
}