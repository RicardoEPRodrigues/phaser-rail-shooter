function Bullet(game, x, y, sprite) {
    "use strict";
    if (sprite) {
        Phaser.Sprite.call(this, game, x, y, sprite);
    } else {
        Phaser.Sprite.call(this, game, x, y, 'bullet');
    }
    this.anchor.setTo(0.5, 1);
    this.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
    this.play('fly');
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    //    this.body.moves = false;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.bulletType = BulletType.ANTIVIRUS;
}

Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;