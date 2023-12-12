function handleSearchSkill(event) {
    const keywords = event.target.value;
    const $cards = $('.card-info');
    const $items = $('.badge-item');
    const pattern = new RegExp(keywords, 'ig');

    // Hide item not match keywords
    $.each($items, (key, item) => {
        const $item = $(item);
        const content = $item.text().trim();

        // Filter by skill
        if(pattern.test(content)) {
            $item.show();
        } else {
            $item.hide();
        }
    });

    // Hide card does not have item
    $.each($cards, (key, card) => {
        const $card = $(card);
        const $badgeItem = $card.find('.badge-item');
        const filterVisibleItem = $badgeItem.filter(function() {
            return $(this).css('display') === 'inline-block';
        });
        const numberOfVisibleItem = filterVisibleItem.length;

        if(numberOfVisibleItem > 0) {
            $card.parent().parent().show();
        } else {
            $card.parent().parent().hide();
        }
    })
}

$(function() {
    const $search = $('.search-active');
    $search.on('input', handleSearchSkill);
});