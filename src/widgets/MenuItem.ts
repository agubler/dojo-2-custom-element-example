import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';

import * as css from './styles/menuItem.m.css';

export interface MenuItemProperties {
	id: string;
	title: string;
	selected: boolean;
	onItemSelected: (id: string) => void;
}

@theme(css)
export class MenuItem extends ThemeableMixin(WidgetBase)<MenuItemProperties> {

	private _onClick() {
		this.properties.onItemSelected(this.properties.id);
	}

	protected render() {
		const { selected, title } = this.properties;

		return v('li', { classes: this.classes(css.root) }, [
			v('span', {
				classes: this.classes(css.item, selected ? css.selected : null),
				onclick: this._onClick
			}, [ title ])
		]);

	}
}
