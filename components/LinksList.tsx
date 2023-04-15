import { List, ListItem } from '@/lib/types';
import { Dispatch, SetStateAction } from 'react';
import LinksListItem from './LinksListItem';

export default function LinksList({
    links,
    setHasShareLink
}: {
    links: List;
    setHasShareLink: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <>
            {links.length !== 0 &&
                <ul className="mt-8">
                    {links.map((link: ListItem) => (
                        <LinksListItem item={link} setHasShareLink={setHasShareLink} key={link.href} />
                    ))}
                </ul>
            }
        </>
    );
};