import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';
import { theme, ThemedMixin } from '@dojo/widget-core/mixins/Themed';
import { WNode } from '@dojo/widget-core/interfaces';
import { MenuItem, MenuItemProperties } from './MenuItem';

import * as css from './styles/menu.m.css';

interface MenuProperties {
	onSelected: (data: any) => void;
}

@theme(css)
export class Menu extends ThemedMixin(WidgetBase)<MenuProperties> {

	private _selectedId: number;

	private _onSelected(id: number, data: any) {
		this._selectedId = id;
		this.properties.onSelected(data);
		this.invalidate();
	}

	render() {
		const items = this.children.map((child: WNode<MenuItem>, index: number) => {
			(child.properties as MenuItemProperties).onSelected = (data: any) => this._onSelected(index, data);
			if (this._selectedId !== undefined) {
				(child.properties as MenuItemProperties).selected = index === this._selectedId;
			}
			return child;
		});

		return v('nav', { classes: this.theme(css.root) }, [
			v('ol', {
				classes: this.theme(css.menuContainer)
			}, items)
		]);
	}
}
