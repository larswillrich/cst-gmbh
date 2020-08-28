import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './pictureGalary.css';

var createReactClass = require('create-react-class');

var listOfProducts = [
  '20160627_091540.jpg',
  '20200611_121837.jpg',
 'CST!597mitZungeeinzeln.jpg',
 'CST1266und1276.jpg',
 'CST1597kmplett.jpg',
 'CST1599mitZungeundDichtungaufBlendrahmen.jpg',
 'CSTeinzeln1266und1276.jpg',
 'CSTfrSchco.jpg',
 'PfostenverbinderProfinemitweisserKappefornax.jpg',
 'cst1599mitZungeundDichtung.jpg',
 'frSchco.jpg',
 'gealanPPVNLneumitZunge.jpg',
 'gealanPlttchen.jpg',
 'gealannl1599image2.jpg',
 'metal-2-2.jpg',
 'metal-3-3.jpg'
]

var listOfProductsDescription = [
  'Super Device',
  'Super Device',
  'Super Device',
  'Super Device',
  'Super Device',
  'Super Device',
  'Super Device',
  'Super Device',
  'Super Device',
  'Super Device',
  'Super Device',
  'Super Device',
  'Super Device',
  'Super Device',
  'Super Device',
  'Super Device',
]

export default createReactClass({
  render() {

    const col = 6
    const pictures = [listOfProducts.length/col]

    for (const [index, value] of listOfProducts.entries()) {
      if (index % col == 0){
        pictures[parseInt(index/col)] = []
      }

      pictures[parseInt(index/col)].push(
              <Col>
                <Figure>
                  <Figure.Image
                    width={200}
                    height={200}
                    alt="171x180"
                    src={"https://github.com/larswillrich/cst-gmbh/blob/master/website/cst-gmbh/public/assets/img/products/" + value}
                  />
                  <Figure.Caption>
                  {listOfProductsDescription[index]}
                  </Figure.Caption>
                </Figure>
              </Col>
        )
      }

      const items = []
      const itemsInRow = []
      for (const [index, x] of pictures.entries()) {
        const itemsInRow = []
        for (const [innerindex, value] of x.entries()) {
          console.log(value)
          itemsInRow.push(value)
        }
        items.push(<Row>{itemsInRow}</Row>)
      }



    return (
    <Container>
        {items}
    </Container>
      );
    }
  });