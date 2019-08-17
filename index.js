class Message {
    constructor (text = '', created = Date.now()){
        this.text= text;
        this.created= created;
    }

    get created(){ return this._created; }

    set created(created){ 
        if(!created || isNaN(created)){
            throw new Error('Invalid created');
        }
        this._created = created; 
    }

    toString(){
        return `Message: ${this.text} - Created: ${this.created}`;
    }
}

class ImageMessage extends Message{
    constructor (text='', created=Date.now(), url='', thumbmail=''){
        super(text,created);
        this._url = url;
        this._thumbmail = thumbmail;
    }

    get url(){ return this._url; }
    set url(url) { this._url = url; }

    get thumbmail(){ return this._thumbmail; }
    set thumbmail(thumbmail) { this._thumbmail = thumbmail; }  
    
    toString(){
        return `ImageMessage: Message: ${this.text} - Created: ${this.created} Url:${this.url} Thumbmail:${this.thumbmail} `;
    }
}

// var errorMessage = new Message(null, null);
var emptyMessage = new Message();
var textMessage = new Message('Yesterday message', Date.now() - 86400);
var imageMessage = new ImageMessage();
console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(imageMessage));
