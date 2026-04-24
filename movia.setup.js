import{Movia} from "./src/movia.js";

export const modals = {
    movia1:  new Movia({
        id: "basic-modal",
        content: `
            <h1> Basic Modal </h1>
            <p>This is a simple modal.</p>
        `,
        closeMethods: ["button", "overlay", "escape"],
        destroyOnClose:false,
    }),
    movia2: new Movia({
        id:"buttons-modal",
        label:"Confirm Action",
        content: `
        <h1> Confirmation Modal </h1>
        <p>Are you sure you want to perform this action?</p>
        `,
        classNames:"modal-btn primary",
        footer:true,
        onClick: () => {
            confirm("Action confirmed!");
            modal2.close();
        }
        
    }),

    movia3: new Movia({
        id:"large-content-modal",
        enableScrollLock: true,
        content: `
        <h1>Large Content Modal</h1>
        <p>This modal contains a large amount of content, suitable for displaying extended text or information.</p>
        <p>Please scroll down to view the entire content.</p>
        <p>The content can include multiple paragraphs, images, or other detailed information.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque adipisci mollitia voluptatibus explicabo non perspiciatis eaque sed qui. Est.</p>
        `,
        destroyOnClose:false,
    }),


    movia4: new Movia({
        id:"footer-only-modal",
         content: `  
        <h1> Footer-Only Close Modal </h1>
        <p>This modal can only be closed via the button in the footer for a controlled experience.</p> 
        `,
        footer: true,
        destroyOnClose:false,
    }),

    movia5: new Movia({
        id:"persistent-modal",
        content: `  
        <h1> Persistent Modal </h1>
        <p>This modal stays in the DOM even after being closed, allowing you to reopen it without losing any changes.</p>
        <p>You can write something in the input below, close the modal, and reopen it to see the content still intact.</p>
        <input type="text" placeholder="Type something here..." style="width: 100%; padding: 8px; margin-top: 10px;" />
        `,
        destroyOnClose: false,
    }),


    movia6: new Movia({
        id:"multiple-modals",
        content: `  
        <h1>Multiple Modals - First Modal</h1>
        <p>This modal demonstrates interaction between multiple modals.</p>
        <button class="btn js-open-basic-modal">Open Basic Modal</button>
        `,
        destroyOnClose:false,
        onOpen() {
            const btn = this.backdrop.querySelector(".js-open-basic-modal");
            if (!btn) return;

            btn.onclick = () => {
                modals.movia1.open();
            };
        }
    }),

    movia7: new Movia({
        id:"youtube-embed-modal",
        content: `<iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/9EDZixuODrw?list=RD9EDZixuODrw&start_radio=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
        </iframe>`,
        destroyOnClose:false,
        autoSanitize:false,
    }),

}


modals.movia2.addFooterButton({
    id:"close-btn",
    label:"Close",
    classNames:"modal-btn",
    onClick: () => {
        modals.movia2.close();
    },
})
modals.movia2.addFooterButton({
    id:"confirm-btn",
    label:"Confirm",
    classNames:"modal-btn primary",
    onClick: () => {        
        alert("Confirmed!");
        modals.movia2.close();
    }
});

modals.movia4.addFooterButton({
    id:"close-btn",
    label:"Close",
    classNames:"modal-btn",
    onClick: () => {
        modals.movia4.close();
    },
});