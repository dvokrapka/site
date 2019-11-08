<main>
    <section class="fs-screen">
        <div class="fs-portfolio"></div>
        <div class="grey-dots" data-paralax></div>
        <!-- <div id="preLoad" class="preload"></div> -->
        <div data-uk-parallax="{y: '0,-200', scale: '1,0.5', repeat: true}">
            <h1 class="typing white-text" data-typing="DVOKRAPKA">
                <?php echo $title; ?>
            </h1>
            <a href="#" class="scroll-btm" data-scroll="section">
                <?php load_inline('assets/img/buttons/gobtm.tpl'); ?>
            </a>
        </div>
    </section>
    <?php if (!empty($subs['pages'])) : ?>
    <section class="portfolio-screen">
        <div class="sect-container">
            <div id="modalBox" class="dv-modal-box">
                <span class="dv-modal-close"></span>
                <div class="dv-modal-body">
                    <div id="pfMedia">
                    </div>
                </div>
            </div>
            <!-- Filter Controls Btns -->
            <div id="portFolioFilter" class="portfolio-filter">
                <a href="" data-uk-filter="" class="uk-active">Усе</a>
                <?php foreach ($subs['pages'] as $page) : ?>
                <a href="" data-uk-filter="<?php echo $page['name'];?>">
                    <?php echo $page['title'];?></a>
                <?php endforeach; ?>
            </div>
            <!-- Dynamic Filter Grid -->
            <div class="uk-grid uk-grid-width-medium-1-2 uk-grid-width-large-1-3 uk-grid-collapse" data-uk-grid="{controls: '#portFolioFilter'}">
                <?php foreach ($subs['pages'] as $page) :
							$ops = json_decode($page['options'], true);
							echo Modules::run('medialib/show_filtered', $ops['widget']['portfolio'], $page['id'], $page['name']);
				endforeach; ?>
            </div>
        </div>
    </section>
    <?php endif; ?>
</main>