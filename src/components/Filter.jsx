import React from 'react';
import {Input, Menu} from 'semantic-ui-react';

const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery}) => {
    return (
        <div className='container'>
            <Menu secondary>
                <div className='filter'>
                    <Menu.Item
                        active={filterBy === 'all'}
                        onClick={setFilter.bind(this, 'all')}>
                        All
                    </Menu.Item>
                    <Menu.Item
                        active={filterBy === 'price_high'}
                        onClick={setFilter.bind(this, 'price_high')}>
                        Price (high)
                    </Menu.Item>
                    <Menu.Item
                        active={filterBy === 'price_low'}
                        onClick={setFilter.bind(this, 'price_low')}>
                        Price (low)
                    </Menu.Item>
                    <Menu.Item
                        active={filterBy === 'author'}
                        onClick={setFilter.bind(this, 'author')}>
                        Author
                    </Menu.Item>
                </div>
                <div>
                <Menu.Item>
                    <Input
                        icon="search"
                        onChange={e => setSearchQuery(e.target.value)}
                        value={searchQuery}
                        placeholder="Search..."
                    />
                </Menu.Item>
                </div>
            </Menu>
        </div>
    );
};

export default Filter;
