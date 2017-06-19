/**
 * Created by claudio on 19/06/17.
 */

@registerDynamicValueClass
class CatenisReadStateSelectDynValue {

    static identifier = 'com.blockchainofthings.PawExtensions.CatenisReadStateSelectDynValue';
    static title = 'Catenis Message Read State Selection';
    static inputs = [
        DynamicValueInput('readState', 'Read State', "Select", {
            "choices": {
                "unread": "1 - Unread",
                "read": "2 - Read",
                "any": "3 - Any"
            }
        })
    ];

    evaluate(context) {
        return this.readState;
    }

    title(context) {
        return 'Select';
    }

    text(context) {
        return this.readState;
    }
}
