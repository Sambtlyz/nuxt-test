<template>
<div>
    <header id="home" class="header-area">
        <nav class="navbar navbar-default navbar-fixed-top" id="scroll-menu">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                        aria-controls="navbar">
                        <span class="sr-only"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class=" navbar-brand" href="/"><img src="img/logo.png" alt="Ema"></a>
                </div>
                <!-- <div class="righttext"> -->
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="active"><a href="#home" class="smoothscroll">หน้าแรก</a></li>
                        <li><a href="#about" class="smoothscroll">มีอะไรใหม่ v2.0</a></li>
						<li><a href="#api" class="smoothscroll">API</a></li>
                        <li><a href="#services" class="smoothscroll">คุณสมบัติ</a></li>
                        <li><a href="#pricing" class="smoothscroll">ราคา</a></li>
                        <li><a href="http://pos.apsth.com/doc" target="_blank">คู่มือการใช้งาน</a></li>
                        <li><a href="#contact" class="smoothscroll">ติดต่อ</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">สมัครใช้งาน<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a tabindex="-1" href="https://www.pos-agent.com/" target="_blank">เข้าสู่ระบบ</a></li>
                                <li><a tabindex="-1" href="https://www.pos-agent.com/" target="_blank">สมัครสมาชิก</a></li>

                            </ul>
                        </li>
                    </ul>
                </div>
                <!-- </div> -->
            </div>
        </nav>
    </header>
</div>
</template>

<style scoped>
.centerlogo {
    margin-left: 380px;
}
.righttext{
    margin-right: 380px;
}

</style>