<template>
<span/>
</template>

<script>
import CountUp from './CountUp';

export default {
  name: 'number-change',
  props: {
    from: { type: [Number,String], default: 0 },
    to: { type: [Number,String], default: undefined },
    duration: { type: Number, default: 1 },
    useEasing: { type: Boolean, default: true },
  },
  watch: {
    to(n)
    {
      this.change(n);
    },
    from()
    {
      this.init();
    },
    duration()
    {
      this.init();
    },
    useEasing()
    {
      this.init();
    },
  },
  mounted()
  {
    this.init();
    this.$emit('init');
  },
  methods: {
    init(options, to=0)
    {
      this.core = new CountUp(
        this.$el,
        this.to !== undefined ? this.to : to,
        {
          decimalPlaces: 0,
          useGrouping: true,
          smartEasingThreshold: 999,
          smartEasingAmount: 333,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: '',
          ...options,
          startVal: this.from,
          duration: this.duration,
          useEasing: this.useEasing,
        }
      );
    },
    play(n)
    {
      if (n !== undefined) this.init({}, n);
      this.core.start(() => this.$emit('complete'));
    },
    pause()
    {
      this.core.pauseResume();
    },
    reset()
    {
      this.core.reset();
    },
    update(options)
    {
      this.init(options);
    },
    change(n)
    {
      this.core.update(n);
    },
  },
}
</script>
