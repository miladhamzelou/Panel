export default {
    state: {
        messages: []
    },
    mutations: {
        flashMessage(state, message){
            {
                state.messages.push({
                    text: message.text,
                    type: (typeof message.type === 'undefined') ? 'info' : message.type,
                    show: (typeof message.show === 'undefined') ? true : message.show,
                    timeout: (typeof message.timeout === 'undefined') ? 3000 : message.timeout,
                    important: (typeof message.important === 'undefined') ? false : message.important,
                    remove(){
                        this.show = false;
                        state.messages = state.messages.filter(function (item) {
                            return item.show;
                        });
                    },
                    handleShowEvent(){
                        {
                            if (!this.important) {
                                setTimeout(
                                    () => this.remove(),
                                    this.timeout
                                )
                            }
                        }
                    }
                });

                if (state.messages.length > 3) {
                    state.messages.shift();
                }
            }
        },
    }
};