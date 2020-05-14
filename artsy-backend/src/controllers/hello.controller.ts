// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import {get} from '@loopback/rest';


export class HelloController {

  /**
   * Test to see HelloController works.
   */
  @get('/hello')
  public hello(): string {
    return 'Hello world!';
  }

}
