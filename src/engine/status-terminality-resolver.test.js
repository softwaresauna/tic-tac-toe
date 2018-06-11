import {isStatusTerminal} from "./status-terminality-resolver";
import {DRAW, IN_PROGRESS, O_WON, X_WON} from "./state";

test('throw on invalid status constant', () => {

    expect(() => isStatusTerminal(undefined)).toThrow('Invalid status constant: ' + undefined);
    expect(() => isStatusTerminal('any')).toThrow('Invalid status constant: any');
});

test('resolve status terminality', () => {

    expect(isStatusTerminal(X_WON)).toBeTruthy();
    expect(isStatusTerminal(O_WON)).toBeTruthy();
    expect(isStatusTerminal(DRAW)).toBeTruthy();
    expect(isStatusTerminal(IN_PROGRESS)).toBeFalsy();
});