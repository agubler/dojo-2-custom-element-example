import Map from '@dojo/shim/Map';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';
import { WNode } from '@dojo/widget-core/interfaces';
import { DomWrapperProperties } from '@dojo/widget-core/util/DomWrapper';

import * as css from './styles/menu.m.css';

interface MenuProperties {
	onSelected: (data: any) => void;
}

@theme(css)
export class Menu extends ThemeableMixin(WidgetBase)<MenuProperties> {

	private _selectedId: number;

	private _handlerMap = new Map<number, Function>();

	private _foo(id: number, data: any) {
		this._selectedId = id;
		this.properties.onSelected(data);
		this.invalidate();
	}

	render() {
		const items = this.children.map((child: WNode<WidgetBase<DomWrapperProperties>>, index: number) => {
			let handler = this._handlerMap.get(index);
			if (!handler) {
				handler = (event: any) => {
					this._foo(index, event.detail);
				};
				this._handlerMap.set(index, handler);
			}
			debugger;
			child.properties = { ...child.properties, onselected: handler };
			if (this._selectedId !== undefined) {
				child.properties = { ...child.properties, selected: this._selectedId === index };
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
