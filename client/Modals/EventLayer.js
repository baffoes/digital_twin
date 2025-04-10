class EventLayer{
    constructor(){
        this.events = []
    }

    addEvent(event) {
        this.events.push(event);
        console.log("Event added:", event.getInfo());
    }

    getEvents(createBoxFunction) {
        this.events.forEach(event => {
            event.displayEvent(createBoxFunction);
        });
    }
}
export default EventLayer;