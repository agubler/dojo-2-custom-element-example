import { CustomElementDescriptor } from '@dojo/widget-core/customElements';
import { Menu } from './Menu';

export default function createHelloWorldElement(): CustomElementDescriptor {
	return {
		tagName: 'demo-menu',
		widgetConstructor: Menu,
		events: [
			{
				propertyName: 'onSelected',
				eventName: 'selected'
			}
		]
	};
};

