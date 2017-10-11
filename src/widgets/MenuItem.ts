import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';

import * as css from './styles/menuItem.m.css';

export interface MenuItemProperties {
	title: string;
	selected?: boolean;
	data?: any;
	onSelected?: (data: any) => void;
}

@theme(css)
export class MenuItem extends ThemeableMixin(WidgetBase)<MenuItemProperties> {

	private _onClick() {
		this.properties.onSelected && this.properties.onSelected(this.properties.data);
	}

	protected render() {
		const { title, selected } = this.properties;

		return v('li', { classes: this.classes(css.root) }, [
			v('span', {
				classes: this.classes(css.item, selected ? css.selected : null),
				onclick: this._onClick
			}, [ title ])
		]);

	}
}
