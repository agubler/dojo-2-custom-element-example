import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';
import { WNode } from '@dojo/widget-core/interfaces';
import { MenuItem } from './MenuItem';

import * as css from './styles/menu.m.css';

interface MenuProperties {
	onSelected: (data: any) => void;
}

@theme(css)
export class Menu extends ThemeableMixin(WidgetBase)<MenuProperties> {

	private _selectedId: number;

	private _blah(id: number, data: any) {
		this._selectedId = id;
		this.properties.onSelected(data);
		this.invalidate();
	}

	render() {
		const items = this.children.map((child: WNode<MenuItem>, index: number) => {
			child.properties.onSelected = (data: any) => this._blah(index, data);
			if (this._selectedId !== undefined) {
				child.properties.selected = index === this._selectedId;
			}
			return child;
		});

		return v('nav', { classes: this.classes(css.root) }, [
			v('ol', {
				classes: this.classes(css.menuContainer)
			}, items)
		]);
	}
}
