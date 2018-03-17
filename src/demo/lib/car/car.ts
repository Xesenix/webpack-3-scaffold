import { ISteerable } from './driver';
import { inject, injectable } from 'lib/di';

export interface IAttachablePart {
	attach(parent: string): void;
}

@inject(['car-wheel', 'car-engine'])
export class Car implements ISteerable {
	constructor(
		private wheel: IAttachablePart,
		private engine: IAttachablePart,
	) {
		wheel.attach('car');
		engine.attach('car');
	}

	steer(): void {
		console.log('car steers ok');
	}
}