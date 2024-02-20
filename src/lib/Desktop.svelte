<script lang="ts">
    import DesktopIcon from "./DesktopIcon.svelte";
    import Taskbar from "./Taskbar.svelte";
    import Welcome from "./programs/Welcome.svelte";
    import Notepad from "./programs/Notepad.svelte";
    import Program from "./Program.svelte";
    import Wallet from "./programs/Wallet.svelte";
    import Cmd from "./programs/CMD.svelte";
</script>
<div id="desktop">
    <div id="icons">
        <div id="icons-list">
            <DesktopIcon name="Welcome" icon="https://win98icons.alexmeub.com/icons/png/world-3.png" program={Welcome} />
            <DesktopIcon name="Notepad" icon="https://win98icons.alexmeub.com/icons/png/notepad-4.png" program={Notepad} />
            <DesktopIcon name="Wallet" error icon="https://win98icons.alexmeub.com/icons/png/briefcase-0.png" program={Wallet} />
            <DesktopIcon name="Not Dark Web" error icon="https://win98icons.alexmeub.com/icons/png/msagent-3.png" program={Program} />
            <DesktopIcon name="CMD" icon="https://win98icons.alexmeub.com/icons/png/console_prompt-0.png" program={Cmd} />
            <DesktopIcon name="Calendar" error icon="https://win98icons.alexmeub.com/icons/png/calendar-3.png" program={Program} />
            <DesktopIcon name="Not A Tracker" error icon="https://win98icons.alexmeub.com/icons/png/camera_2-0.png" program={Program} />
            <DesktopIcon name="Internet" error icon="https://win98icons.alexmeub.com/icons/png/search_web-0.png" program={Program} />
            <DesktopIcon name="Finder" error icon="https://win98icons.alexmeub.com/icons/png/magnifying_glass_4-1.png" program={Program} />
            <DesktopIcon name="Vacations" error icon="https://win98icons.alexmeub.com/icons/png/kodak_imaging-0.png" program={Program} />

            <DesktopIcon name="Program" error program={Program} />
        </div>
    </div>
    <Taskbar alignment="bottom" />
</div>

<style>
    #desktop {
        height: 100%;
        width: 100%;
        background-color: rgb(72, 142, 138);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        overflow: hidden;
    }
    #icons {
        height: calc(100% - 57px);
        padding: 5px;
    }
    #icons-list {
        width: 100%;
        height: 100%;
        padding: 5px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-start;
    }
</style>
