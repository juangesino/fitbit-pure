export interface Config {
	animateHeartRate: 'off' | 'interval' | 'pulse' | null;
	animateSeparator: boolean | null;
	aodOpacity: number | null;
	showBatteryPercentage: boolean | null;
	showBatteryIcon: boolean | null;
	showDate: boolean | null;
	showLeadingZero: boolean | null;
	showRestingHeartRate: boolean | null;
}

export const defaultConfig: Config = {
	animateHeartRate: 'pulse',
	animateSeparator: true,
	aodOpacity: 0.6,
	showBatteryPercentage: true,
	showBatteryIcon: true,
	showDate: true,
	showLeadingZero: true,
	showRestingHeartRate: true
};

export const emptyConfig: Config = {
	animateHeartRate: null,
	animateSeparator: null,
	aodOpacity: null,
	showBatteryPercentage: null,
	showBatteryIcon: null,
	showDate: null,
	showLeadingZero: null,
	showRestingHeartRate: null
};
