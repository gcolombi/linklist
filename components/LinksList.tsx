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
    let increment = 0;
    return (
        <>
            {links.length !== 0 &&
                <ul className="mt-8">
                    {links.map((link: ListItem, i) => {
                        increment += 0.1;
                        return (
                            <LinksListItem
                                item={link}
                                setHasShareLink={setHasShareLink}
                                key={i}
                                delay={0.3 + increment}
                                start="-100% bottom"
                                end="top top"
                                watch
                            />
                        );
                    })}
                </ul>
            }
        </>
    );
};