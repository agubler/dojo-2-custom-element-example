import { CustomElementDescriptor } from '@dojo/widget-core/customElements';
import { Menu } from './Menu';

export default function createHelloWorldElement(): CustomElementDescriptor {
	return {
		tagName: 'demo-nav',
		widgetConstructor: Menu,
		properties: [
			{
				propertyName: 'data',
				widgetPropertyName: 'menuItemData'
			}
		],
		attributes: [
			{
				attributeName: 'selectedId',
				propertyName: 'selectedId'
			}
		],
		events: [
			{
				propertyName: 'onItemSelected',
				eventName: 'onItemSelected'
			}
		]
	};
};

