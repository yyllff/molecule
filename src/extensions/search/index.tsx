import * as React from 'react';
import {
    activityBarService,
    sidebarService,
    IExtensionService,
    IActivityBarItem,
    editorService,
} from 'mo';
import { IExtension } from 'mo/model/extension';
import SearchPane from './searchPane';

function init() {
    const searchSidePane = {
        id: 'searchPane',
        title: 'SEARCH',
        render() {
            return <SearchPane />;
        },
    };

    sidebarService.push(searchSidePane);

    const searchActivityItem = {
        id: 'search',
        name: 'Search',
        iconName: 'codicon-search',
    };

    activityBarService.push(searchActivityItem);

    activityBarService.onSelect((e, item: IActivityBarItem) => {
        if (item.id === searchActivityItem.id) {
            sidebarService.updateState({
                current: searchSidePane.id,
            });
        }
    });

    editorService.changeTab((data) => {
        console.log(data);
    });
    editorService.selectTab((tab) => {
        console.log(`selected tabs${tab}`);
    });
}

export const ExtendSearch: IExtension = {
    activate(extensionCtx: IExtensionService) {
        init();
    },
};
