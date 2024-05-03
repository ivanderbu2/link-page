interface Branch {
    label: string,
    href: string
}

let branches: Branch[] = [
    {
        label: 'WPJack - WordPress Cloud Hosting Panel',
        href: 'https://wpjack.com'
    },
    {
        label: 'Niched AI - Content Discovery Platform',
        href: 'https://niched.ai'
    },
    {
        label: 'Jetindexer - Google Indexing App',
        href: 'https://jetindexer.com'
    },
    {
        label: 'Codingo - DFY SaaS Agency',
        href: 'https://codingo.me'
    },
]

let title: string = 'Ivan Radunovic'
let subtitle: string = 'Senior Full Stack Developer - Laravel, Vue, Node'
let avatarTitle: string = 'My Avatar'
export {
    branches,
    title,
    subtitle,
    avatarTitle
};