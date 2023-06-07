let isApplicationRunning = true;
let isSystemTurnOn       = false;
let isSystemTurnOff      = true;

const commands = {
    EXIT    : "exit",
    TURNON  : "turnon",
    ON      : "on",
    STATUS  : "status",
    FINISH  : "finish"
};

const statusMessages = {
    ENTER_COMMAND    : "Въведи команда ?",
    END_APP          : "Програмата приключи",
    INIT_APP         : "Системата стартира успешно",
    TURNON_FAIL      : "Грешна команда - трябва да включите системата",
    FINISH_END       : "Запълвам дупката",
    STATUS_END       : "Всичко е ок",
    INCORECT_COMMAND : "Грешна команда"
};

while(isApplicationRunning) {

    let commandId = prompt(statusMessages.ENTER_COMMAND);

    if(commandId == commands.EXIT) {
        // break;
        alert(statusMessages.END_APP);
        isApplicationRunning = false;
        continue;
    }

    if(isSystemTurnOff) {

        // && - логическо И
        // || - логическо ИЛИ
        let isCommandProcessable =  commandId == commands.TURNON 
                                    ||  
                                    commandId == commands.ON;

        if(isCommandProcessable) {

            isSystemTurnOn = true;
            alert(statusMessages.INIT_APP);
        }
        else {
            alert(statusMessages.TURNON_FAIL);
            continue;
        }
    }

    if(commandId == commands.FINISH) {
        alert(statusMessages.FINISH_END);    
    }
    else if(commandId == commands.STATUS) {
        alert(statusMessages.STATUS_END);    
    }
    else {
        alert(statusMessages.INCORECT_COMMAND);
    }
}