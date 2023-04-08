import { LinksList, ListItem } from '@/lib/types';
import LinksListItem from './LinksListItem';

export default function LinksList({
    links
}: LinksList ) {
    return (
        <>
            {links.length !== 0 &&
                <ul className="mt-8">
                    {links.map((link: ListItem) => (
                        <LinksListItem key={link.href} {...link} />
                    ))}
                </ul>
            }
        </>
    );
};