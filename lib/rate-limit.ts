import { Ratelimit } from '@upstash/ratelimit'
import redis from "./upstash"

export const rateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "5 m")
})