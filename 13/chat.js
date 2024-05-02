async function jsonPost(url, data) {
     try {
          const response = await fetch(url, {
               method: 'POST',
               body: JSON.stringify(data)
          });

          if (!response.ok) {
               throw new Error('status is not 200');
          }

          return await response.json();
     } catch (error) {
          throw new Error('jsonPost failed');
     }
}



const btn = document.getElementById('btn')

const messContainer = document.getElementById('messContainer')
const nextMessageId = document.getElementById('nextMessageId')


async function sendMessage(nick, message) {
     try {
          const response = await jsonPost("http://students.a-level.com.ua:10012", { func: 'addMessage', nick, message });
          nextMessageId.innerText = 'Next Message ID: ' + response.nextMessageId;
     } catch (e) {
          console.error(e);
     }
}


async function getMessages() {
     try {
          const response = await jsonPost("http://students.a-level.com.ua:10012", { func: "getMessages" });
          render(response.data);

          console.log("getMessages: " + response.nextMessageId);
          return response.nextMessageId;
     } catch (error) {
          console.error('Error:', error.message);
          throw error;
     }
}

async function sendAndCheck() {
     try {
          const nick = document.getElementById('nick').value
          const message = document.getElementById('message').value

          await sendMessage(nick, message)
          getMessages()

     } catch (error) {
          console.error('Error:', error.message);
     }
}



const render = (data) => {

     data.forEach((item, index) => {
          const divContainer = document.createElement('div')
          messContainer.append(divContainer)
          divContainer.className = 'divContainer'

          const num = document.createElement('span')
          divContainer.append(num)

          const strong = document.createElement('strong')
          divContainer.append(strong)
          const p = document.createElement('p')
          divContainer.append(p)
          const time = document.createElement('span')
          divContainer.append(time)

          strong.innerText = item.nick
          p.innerText = item.message
          time.innerText = new Date(item.timestamp)
          num.innerText = `${index + 1}. `
     });
}

btn.addEventListener('click', () => {
     sendAndCheck()
});

async function checkLoop() {
     while (true) {
          try {
               await getMessages();
               await new Promise(resolve => setTimeout(resolve, 5000));
          }
          catch (error) {
               console.error('Error in checkLoop:', error.message);
               await new Promise(resolve => setTimeout(resolve, 5000));
          }
     }
}

checkLoop()