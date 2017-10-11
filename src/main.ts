import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { w } from '@dojo/widget-core/d';
import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import { Menu } from './widgets/Menu';
import { MenuItem } from './widgets/MenuItem';

class Example extends WidgetBase {

	private _onSelected(data: any) {
		console.log(data);
	}

	protected render() {
		return w(Menu, { onSelected: this._onSelected }, [
			w(MenuItem, { key: 'MenuOne', title: 'Menu Item 1' }),
			w(MenuItem, { key: 'MenuTwo', title: 'Menu Item 2', selected: true }),
			w(MenuItem, { key: 'MenuThree', title: 'Menu Item 3' })
		])
	}
}
const Projector = ProjectorMixin(Example);
const projector = new Projector();

projector.append();
