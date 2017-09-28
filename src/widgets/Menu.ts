import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';

import { MenuItem } from './MenuItem';
import * as css from './styles/menu.m.css';

export interface MenuItemData {
	id: string;
	title: string;
}

export interface MenuProperties {
	menuItemData: MenuItemData[];
	onItemSelected: (id: string) => void;
	selectedId?: string;
}

@theme(css)
export class Menu extends ThemeableMixin(WidgetBase)<MenuProperties> {
	render() {
		const { menuItemData = [], onItemSelected, selectedId } = this.properties;

		return v('nav', { classes: this.classes(css.root) }, [
			v('ol', {
				classes: this.classes(css.menuContainer)
			}, menuItemData.map(({ id, title }) => {
				return w(MenuItem, {
					id,
					title,
					selected: id === selectedId,
					onItemSelected
				});
			}))
		]);
	}
}
